from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    mobile = models.CharField(max_length=11, unique=True, null=True, blank=True, verbose_name='手機號碼')
    sex = models.CharField(
        max_length=10,
        choices=(('男', '男'), ('女', '女'), ('未知', '未知')),
        default='未知',
        verbose_name='性別'
    )
    birthday = models.DateField(null=True, blank=True, verbose_name='生日')
    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='地址')
    avatar = models.ImageField(upload_to='avatar/', null=True, blank=True, verbose_name='頭像')
    nickname = models.CharField(max_length=255, null=True, blank=True, verbose_name='暱稱')
    fullname = models.CharField(max_length=255, null=True, blank=True, verbose_name='全名')
    role = models.ForeignKey('Role', on_delete=models.SET_NULL, null=True, blank=True, verbose_name='角色')

    class Meta:
        db_table = 'user'
        verbose_name = '使用者'
        verbose_name_plural = '使用者'

    def __str__(self):
        return self.username

class Role(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='角色名稱')
    description = models.TextField(blank=True, verbose_name='角色描述')

    class Meta:
        db_table = 'role'
        verbose_name = '角色'
        verbose_name_plural = '角色'

    def __str__(self):
        return self.name