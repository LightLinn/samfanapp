from rest_framework import serializers
from .models import CustomUser, Role

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'mobile', 'sex', 'birthday', 'address', 'avatar', 'nickname', 'fullname']

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'name', 'description']
