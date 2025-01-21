from rest_framework import pagination
from ..response import Response
import logging


logger = logging.getLogger(__name__)


class PageNumberPagination(pagination.PageNumberPagination):
    """Custom pagination class that extends DRF's PageNumberPagination."""

    page_size = 5  # Number of records per page
    page_size_query_param = "page-size"  # Allow clients to set page size via query param
    max_page_size = 50  # Maximum allowed page size limit

    def set_page_size(self, size: int) -> None:
        """Set the number of items per page."""
        logger.debug(f"Setting page size to {size}")
        self.page_size = size

    def set_max_page_size(self, max_size: int) -> None:
        """Set the maximum allowed page size."""
        logger.debug(f"Setting max page size to {max_size}")
        self.max_page_size = max_size

    def get_paginated_response(self, data) -> Response:
        """
        Construct paginated response with metadata.

        Returns response containing pagination metadata and actual results.
        """
        page = self.page
        paginator = self.page.paginator
        items_per_page = self.get_page_size(self.request)  # Get requested page size

        logger.debug(
            f"Paginated response: page {page.number} of {paginator.num_pages}, "
            f"{paginator.count} total items, {items_per_page} items per page"
        )

        return Response({
            "message": "Request was successful",
            "data": {
                "current_page": page.number,
                "total_pages": paginator.num_pages,
                "total_items": paginator.count,
                "items_per_page": items_per_page,
                "has_next": page.has_next(),
                "has_previous": page.has_previous(),
                "next_page_number": page.next_page_number() if page.has_next() else None,
                "previous_page_number": page.previous_page_number() if page.has_previous() else None,
                "results": data
            },
        })