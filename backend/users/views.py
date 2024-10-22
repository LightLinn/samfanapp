from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from .models import CustomUser, Role
from .serializers import CustomUserSerializer, RoleSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    # delete account
    @action(detail=False, methods=['delete'], url_path='delete_account')
    def delete_account(self, request):
        user = request.user
        user.delete()
        return Response({'detail': '帳號已成功刪除'}, status=status.HTTP_204_NO_CONTENT)
    
class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
