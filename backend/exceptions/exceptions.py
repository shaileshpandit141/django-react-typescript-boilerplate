from core.response import Response
from rest_framework import status, views
from rest_framework.exceptions import (
    AuthenticationFailed,
    MethodNotAllowed,
    NotAuthenticated,
    NotFound,
    Throttled,
    ValidationError,
)

from .create_error_response import create_error_response
from .format_validation_errors import format_validation_errors


def exception_handler(exc, context) -> Response | views.Response | None:
    """A custom exception handler that returns the exception details in a custom format."""
    response = views.exception_handler(exc, context)

    error_handlers = {
        ValidationError: lambda error: Response(
            {
                "message": "Validation error",
                "data": {},
                "errors": format_validation_errors(error.detail),
            },
            status=status.HTTP_400_BAD_REQUEST,
        ),
        MethodNotAllowed: lambda error: create_error_response(
            "Method Not Allowed",
            "method_not_allowed",
            error_message="This method is not allowed for this endpoint",
            details=None,
        ),
        NotFound: lambda error: create_error_response(
            "Resource Not Found",
            "not_found",
            error_message="The requested resource was not found",
            details=None,
        ),
        NotAuthenticated: lambda error: create_error_response(
            "Authentication Required",
            "authentication_required",
            error_message="Authentication credentials were not provided",
            details=None,
        ),
        AuthenticationFailed: lambda error: create_error_response(
            "Authentication Failed",
            "authentication_failed",
            error_message="Authentication credentials are incorrect",
            details=None,
        ),
        Throttled: lambda error: create_error_response(
            str(error.detail) or "Request Limit Exceeded",
            "throttled",
            error_message="Allowed limit requests exceeded. Please try again later.",
            details={"retry_after": f"{error.wait} seconds"},
        ),
    }

    for exception_class, handler in error_handlers.items():
        if isinstance(exc, exception_class):
            response = handler(exc)
            if isinstance(exc, MethodNotAllowed):
                response.status_code = status.HTTP_405_METHOD_NOT_ALLOWED
            elif isinstance(exc, NotFound):
                response.status_code = status.HTTP_404_NOT_FOUND
            elif isinstance(exc, (NotAuthenticated, AuthenticationFailed)):
                response.status_code = status.HTTP_401_UNAUTHORIZED
            elif isinstance(exc, Throttled):
                response.status_code = status.HTTP_429_TOO_MANY_REQUESTS
            elif isinstance(exc, Exception):
                response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
            return response

    return response
