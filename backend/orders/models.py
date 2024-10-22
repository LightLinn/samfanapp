from django.db import models

# Create your models here.

class Order(models.Model):
    STATUS_CHOICES = [
        ('備貨中', '備貨中'),
        ('待出貨', '待出貨'),
        ('待付款', '待付款'),
        ('已出貨', '已出貨'),
        ('已取消', '已取消'),
    ]

    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE, related_name='orders', blank=True, null=True)  # 使用者ID
    customer_name = models.CharField(max_length=50)  # 客戶姓名
    customer_mobile = models.CharField(max_length=20)  # 客戶電話
    sales_period = models.ForeignKey('sales_periods.SalesPeriod', related_name='orders', on_delete=models.CASCADE, blank=True, null=True) 
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='備貨中')  # 狀態
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)  # 總金額
    order_date = models.DateTimeField(auto_now_add=True)  # 訂單日期
    box_number = models.CharField(max_length=20, blank=True, null=True, default='')  # 箱號
    pickup_date = models.DateField(blank=True, null=True) # 取貨日期

    shipped_at = models.DateTimeField(blank=True, null=True)  # 出貨日期
    shipped_by = models.ForeignKey('users.CustomUser', on_delete=models.SET_NULL, blank=True, null=True, related_name='shipped_orders')  # 出貨人

    class Meta:
        db_table = 'order'
        verbose_name = '訂單列表'
        verbose_name_plural = '訂單列表'

    def __str__(self):
        return self.customer_name
    
class OrderItem(models.Model):
    order = models.ForeignKey('Order', related_name='items', on_delete=models.CASCADE)  # 訂單ID
    product = models.ForeignKey('products.Product', related_name='order_items', on_delete=models.CASCADE)  # 產品ID
    quantity = models.PositiveIntegerField()  # 數量
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)  # 價格
    note = models.TextField(blank=True, null=True)  # 備註
    is_prepared = models.BooleanField(default=False)  # 新增字段

    class Meta:
        db_table = 'order_item'
        verbose_name = '訂單項目'
        verbose_name_plural = '訂單項目'

    def __str__(self):
        return self.order.customer_name