# Django imports
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

# Django REST framework imports
from rest_framework import status
from rest_framework.views import APIView

# Local imports
from permissions import IsAuthenticated
from throttles import UserRateThrottle
from utils import Response, SendEmail, FieldValidator

User = get_user_model()


class ChangePasswordAPIView(APIView):
    """API view for listing and creating YourModel instances.

    Supports GET and POST methods. Other HTTP methods return 400 errors.
    Requires authentication and implements rate limiting.
    """
    permission_classes = [IsAuthenticated]
    throttle_classes = [UserRateThrottle]

    def get(self, request, *args, **kwargs) -> Response.type:
        """GET method not supported."""
        return Response.method_not_allowed('GET')

    def post(self, request, *args, **kwargs) -> Response.type:
        """Create one or more new YourModel instances."""
        user = request.user

        clean_data = FieldValidator(request.data, [
            'old_password',
            'new_password'
        ])

        if not clean_data.is_valid():
            return Response.error({
                'message': 'Validation error',
                'errors': clean_data.get_errors()
            }, status.HTTP_400_BAD_REQUEST)

        # Check if the old password is correct
        if not user.check_password(clean_data.get('old_password')):
            return Response.error({
                'message': 'Old password is incorrect',
                'errors': {
                    'old_password': 'Old password is incorrect'
                }
            }, status.HTTP_400_BAD_REQUEST)

        # Validate the password
        try:
            validate_password(clean_data.get('new_password'))
        except Exception as error:
            return Response.error({
                'message': 'New password Invalid',
                'errors': {
                    'password': error  # type: ignore
                }
            }, status=status.HTTP_400_BAD_REQUEST)

        # Set the new password
        user.set_password(clean_data.get('new_password'))
        user.save()
        SendEmail({
            'subject': 'Forgot Password Request',
            'emails': {
                'to_emails': user.email
            },
            'context': {
                'user': user
            },
            'templates': {
                'txt': 'users/change_password/success_message.txt',
                'html': 'users/change_password/success_message.html'
            }
        })
        return Response.success({
            'message': 'Your password has been changed',
            'data': {
                'detail': 'Your new password has been change successful'
            }
        }, status.HTTP_200_OK)

    def put(self, request, *args, **kwargs) -> Response.type:
        """PUT method not supported."""
        return Response.method_not_allowed('PUT')

    def patch(self, request, *args, **kwargs) -> Response.type:
        """PATCH method not supported."""
        return Response.method_not_allowed('PATCH')

    def delete(self, request, *args, **kwargs) -> Response.type:
        """DELETE method not supported."""
        return Response.method_not_allowed('DELETE')

    def options(self, request, *args, **kwargs) -> Response.type:
        """OPTIONS method not supported."""
        return Response.options(['POST'])
