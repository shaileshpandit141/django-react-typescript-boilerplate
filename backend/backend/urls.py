"""
URL Configuration for Django Backend Project

This module defines the URL patterns and routing configuration for the core Django application.
It maps URLs to their corresponding views and configures static file serving and error handling.

URLs:
    / : Root route serving the frontend application via IndexTemplateView
    /admin/ : Django's built-in admin interface for site administration
    /api/v1/auth/ : Authentication API endpoints for user management

Configuration Details:
    - Includes custom 404 error handling through custom_404_view
    - Configures serving of static media files using Django's static file handler
    - API endpoints are versioned under api/v1/ prefix for future compatibility
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import handler404
from .views import custom_404_view, IndexTemplateView
from users import urls


# Main URL patterns defining route-to-view mappings
urlpatterns = [
    # Frontend application served at root URL
    path("", IndexTemplateView.as_view(), name='index'),

    # Django admin interface accessible at /admin
    path("admin/", admin.site.urls, name='admin'),

    # User authentication URLs under /api/v1/auth
    path("api/v1/auth/", include((urls, 'auth'), namespace='auth')),
]

# Configure custom error handling
handler404 = custom_404_view

# Enable serving of user-uploaded media files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)