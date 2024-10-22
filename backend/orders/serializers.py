from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductSerializer
from sales_periods.serializers import SalesPeriodSerializer
from users.serializers import CustomUserSerializer

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    sales_period = SalesPeriodSerializer()
    user = CustomUserSerializer()
    shipped_by = CustomUserSerializer()
    items_count = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = '__all__'

    def get_items_count(self, obj):
        return obj.items.count()