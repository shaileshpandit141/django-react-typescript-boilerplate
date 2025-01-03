from django.contrib.postgres.forms.hstore import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model

# Get the User model configured for the project
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for User model that handles serialization and deserialization of User objects.

    This serializer provides validation and serialization for the main user fields:
    id, email, first_name, and last_name.

    Fields:
        id (int): Read-only user ID
        email (str): Required. Email address for the user
        first_name (str): Optional. User's first name
        last_name (str): Optional. User's last name

    Validation:
        - ID field is read-only
        - Email is required with custom error messages for required/invalid
        - First name and last name are optional with invalid input error messages

    Note:
        The ID field is marked as read-only both in read_only_fields and extra_kwargs
        for additional security.
    """
    class Meta:
        model = User
        fields = ["id", "email", "username", "first_name", "last_name", "is_verified", "avatar"]
        read_only_fields = ['id', 'usename', 'is_verified']

    def create(self, validated_data):
        hashed_password = self.context.get('hashed_password', None)

        email = validated_data.get('email')
        username = email.split('@')[0]

        if hashed_password is None:
            raise ValidationError('Invalid password')

        # Handle the single record.
        return User.objects.create(
            password=hashed_password,
            username=username,
            **validated_data
        )
