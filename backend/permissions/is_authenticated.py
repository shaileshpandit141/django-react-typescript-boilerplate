from rest_framework.permissions import IsAuthenticated as DRFIsAuthenticated
from rest_framework.exceptions import PermissionDenied

class IsAuthenticated(DRFIsAuthenticated):
    def has_permission(self, request, view) -> bool:
        if not request.user or not request.user.is_authenticated:
            # Raising a custom permission denied exception with a custom message
            raise PermissionDenied([{
                "field": "authentication",
                "code": "not_authenticated",
                "message": "You must be authenticated to access this resource.",
                "details": {
                    "required": True
                }
            }])

        return True
