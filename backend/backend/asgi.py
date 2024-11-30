"""
ASGI Configuration for Backend Project

This module configures the ASGI (Asynchronous Server Gateway Interface) for the Django backend project.
ASGI provides a standard interface between async-capable Python web servers, frameworks and applications.

The main purposes of this file are:
1. Setting up the ASGI application variable for the web server
2. Configuring Django settings module path
3. Creating the ASGI application instance

The resulting application object is used by ASGI servers (like Daphne or Uvicorn)
to communicate with the Django application.

For detailed deployment information, see:
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os

# Import Django's ASGI handler
from django.core.asgi import get_asgi_application

# Configure Django settings module path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Create ASGI application instance
application = get_asgi_application()