from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from dns_smtp_email_validator import DNSSMTPEmailValidator
from limited_time_token_handler import LimitedTimeTokenGenerator
from permissions import AllowAny
from quick_utils.send_email import SendEmail
from quick_utils.views import APIView, Response
from throttling import AuthRateThrottle
from user_auth.serializers import UserSerializer
from utils import FieldValidator

User = get_user_model()


class SignupView(APIView):
    """API view for handling user signup functionality"""

    permission_classes = [AllowAny]
    throttle_classes = [AuthRateThrottle]

    def post(self, request, *args, **kwargs) -> Response:
        """Handle user registration"""

        # Validate required fields
        clean_data = FieldValidator(
            request.data, ["email", "password", "confirm_password"]
        )

        if not clean_data.is_valid():
            return self.response(
                {"message": "Validation error", "errors": clean_data.errors},
                self.status.HTTP_400_BAD_REQUEST,
            )

        email = clean_data.get("email")
        password = clean_data.get("password")
        confirm_password = clean_data.get("confirm_password")

        # Validate password meets requirements
        try:
            validate_password(password)
        except ValidationError as error:
            errors = []
            for message in error:
                errors.append(
                    {
                        "field": "password",
                        "code": "invalid_password",
                        "message": message,
                        "details": None,
                    }
                )
            return self.response(
                {"message": "Validation error", "errors": errors},
                self.status.HTTP_400_BAD_REQUEST,
            )

        # Check password confirmation matches
        if password != confirm_password:
            return self.response(
                {
                    "message": "Password validation error",
                    "errors": [
                        {
                            "field": "confirm_password",
                            "code": "confirm_password_not_metch",
                            "message": "Confirm password is not equal to password",
                            "details": None,
                        }
                    ],
                },
                self.status.HTTP_400_BAD_REQUEST,
            )

        # Validate the email is exist in the internet or not
        validator = DNSSMTPEmailValidator(email)
        if not validator.is_valid():
            return self.response(
                {"message": "Email Validation Failed", "errors": validator.errors},
                self.status.HTTP_400_BAD_REQUEST,
            )

        # Hash the password for secure storage
        hashed_password = make_password(password)

        # Create new user instance
        serializer = UserSerializer(
            data=clean_data.data, context={"hashed_password": hashed_password}
        )
        if serializer.is_valid():
            serializer.save()
            user = serializer.instance

            # Generate verification token and URL
            generator = LimitedTimeTokenGenerator({"user_id": getattr(user, "id")})
            token = generator.generate()
            if token is None:
                return self.response(
                    {
                        "message": "We encountered an issue",
                        "errors": [
                            {
                                "field": "token",
                                "code": "token_generation_failed",
                                "message": "We couldn't generate a verification token. Please try again later.",
                                "details": None,
                            }
                        ],
                    },
                    self.status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            activate_url = f"{settings.FRONTEND_URL}/auth/verify-user-account/{token}"

            # Send verification email
            SendEmail(
                {
                    "subject": "For Account Verification",
                    "emails": {"to_emails": [getattr(user, "email", "Unknown")]},
                    "context": {"user": user, "activate_url": activate_url},
                    "templates": {
                        "txt": "users/verify_account/confirm_message.txt",
                        "html": "users/verify_account/confirm_message.html",
                    },
                }
            )

            return self.response(
                {
                    "message": "Sign up successful",
                    "data": {
                        "detail": "Please check your inbox for the account verification"
                    },
                },
                self.status.HTTP_200_OK,
            )

        return self.response(
            {
                "message": "Invalid data provided",
                "errors": self.format_serializer_errors(serializer.errors),
            },
            self.status.HTTP_400_BAD_REQUEST,
        )
