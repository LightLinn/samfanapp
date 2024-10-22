from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    note = models.TextField(blank=True, null=True)
    img = models.ImageField(upload_to='products/', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'product'
        verbose_name = '商品'
        verbose_name_plural = '商品'

    def __str__(self):
        return self.name