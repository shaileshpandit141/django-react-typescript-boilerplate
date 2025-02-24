from django.contrib.auth import get_user_model
from user_auth.serializers import UserSerializer

from permissions import IsAuthenticated, IsVerified
from quick_utils.views import APIView, Response
from throttling import UserRateThrottle
from utils import FieldValidator

User = get_user_model()


class UserInfoView(APIView):
    """API View for managing authenticated user information."""

    permission_classes = [IsAuthenticated, IsVerified]
    throttle_classes = [UserRateThrottle]

    def get(self, request, *args, **kwargs) -> Response:
        """Retrieve current user"s profile information."""

        user = request.user
        serializer = UserSerializer(instance=user, many=False)
        return self.response(
            {
                "message": "Profile information retrieved successfully",
                "data": serializer.data,
            },
            self.status.HTTP_200_OK,
        )

    def patch(self, request, *args, **kwargs) -> Response:
        """Update authenticated user's profile information."""

        # Validate required fields
        clean_data = FieldValidator(request.data, ["first_name", "last_name"])
        if not clean_data.is_valid():
            return self.response(
                {
                    "message": "Required fields are missing or invalid",
                    "errors": clean_data.errors,
                },
                self.status.HTTP_400_BAD_REQUEST,
            )

        # Update user instance with new data
        serializer = UserSerializer(
            data=clean_data.data, instance=request.user, many=False, partial=True
        )

        if not serializer.is_valid():
            return self.response(
                {
                    "message": "Invalid request data",
                    "errors": self.format_serializer_errors(serializer.errors),
                },
                self.status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()
        return self.response(
            {
                "message": "Profile information updated successfully",
                "data": serializer.data,
            },
            self.status.HTTP_200_OK,
        )
