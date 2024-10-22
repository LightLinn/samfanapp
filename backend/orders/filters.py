import django_filters
from .models import Order, OrderItem

class OrderFilter(django_filters.FilterSet):
    customer_name = django_filters.CharFilter(lookup_expr='icontains')
    customer_mobile = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.ChoiceFilter(choices=Order.STATUS_CHOICES)
    order_date = django_filters.DateFromToRangeFilter()
    pickup_date = django_filters.DateFromToRangeFilter()

    class Meta:
        model = Order
        fields = ['customer_name', 'customer_mobile', 'status', 'order_date', 'sales_period', 'pickup_date']

class OrderItemFilter(django_filters.FilterSet):
    class Meta:
        model = OrderItem
        fields = ['order', 'product']