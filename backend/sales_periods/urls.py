from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SalesPeriodViewSet

router = DefaultRouter()
router.register(r'sales-periods', SalesPeriodViewSet, basename='sales-period')

urlpatterns = [
    path('', include(router.urls)),
]
