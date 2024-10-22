from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet, RoleViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet, basename='user')
router.register(r'roles', RoleViewSet, basename='role')

urlpatterns = [
    path('', include(router.urls)),
]
