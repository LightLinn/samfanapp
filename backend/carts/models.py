from django.db import models
from products.models import Product

class Cart(models.Model):
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE, related_name='carts', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'cart'
        verbose_name = '購物車'
        verbose_name_plural = '購物車'

    def __str__(self):
        return self.user.username

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    added_at = models.DateTimeField(auto_now_add=True)
    note = models.TextField(blank=True, null=True, default='')

    class Meta:
        db_table = 'cart_item'
        verbose_name = '購物車項目'
        verbose_name_plural = '購物車項目'
        unique_together = ('cart', 'product')

    def __str__(self):
        return f'{self.quantity} x {self.product.name} in cart for {self.cart.user.username}'
