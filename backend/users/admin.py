from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Role

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('mobile', 'sex', 'birthday', 'address', 'avatar', 'nickname', 'fullname')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions', 'groups')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'mobile', 'sex', 'birthday', 'address', 'avatar', 'nickname', 'fullname', 'password1', 'password2')}
        ),
    )
    list_display = ('username', 'mobile', 'sex', 'birthday', 'address', 'nickname', 'fullname', 'is_staff')
    search_fields = ('username', 'mobile', 'nickname', 'fullname')
    ordering = ('username',)

admin.site.register(CustomUser, CustomUserAdmin)

# @admin.register(Role)
# class RoleAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description')
#     search_fields = ('name',)
#     ordering = ('name',)
