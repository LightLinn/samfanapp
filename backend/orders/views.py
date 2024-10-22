from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer
from .filters import OrderFilter, OrderItemFilter
from django.utils import timezone
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-order_date')
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = OrderFilter

    @action(detail=True, methods=['patch'])
    def update_order_details(self, request, pk=None):
        order = self.get_object()
        serializer = self.get_serializer(order, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['patch'])
    def cancel(self, request, pk=None):
        order = self.get_object()
        if order.status == '已取消':
            return Response({"detail": "訂單已經被取消"}, status=status.HTTP_400_BAD_REQUEST)
        
        order.status = '已取消'
        order.save()
        return Response({"detail": "訂單已成功取消"}, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['patch'])
    def prepare(self, request, pk=None):
        order = self.get_object()
        if order.status != '備貨中':
            return Response({"detail": "訂單狀態不允許備貨"}, status=status.HTTP_400_BAD_REQUEST)
        
        order.status = '待出貨'
        order.save()
        return Response({"detail": "訂單已成功備貨"}, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['patch'])
    def ship(self, request, pk=None):
        order = self.get_object()
        if order.status != '待出貨':
            return Response({"detail": "訂單狀態不允許出貨"}, status=status.HTTP_400_BAD_REQUEST)
        
        order.status = '已出貨'
        order.shipped_at = timezone.now()
        order.shipped_by = request.user
        order.save()
        return Response({"detail": "訂單已成功出貨"}, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'], url_path='remove_item')
    def remove_item(self, request, pk=None):
        order = self.get_object()
        item_id = request.data.get('item_id')
        
        if not item_id:
            return Response({"detail": "未提供項目 ID"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            item = order.items.get(id=item_id)
        except OrderItem.DoesNotExist:
            return Response({"detail": "項目不存在"}, status=status.HTTP_404_NOT_FOUND)
        
        if order.status not in ['備貨中', '待出貨']:
            return Response({"detail": "訂單狀態不允許刪除項目"}, status=status.HTTP_400_BAD_REQUEST)
        
        item.delete()
        # TODO 
        # order.total_amount = sum(item.price * item.quantity for item in order.items.all())
        order.save()
        
        return Response({"detail": "項目已成功刪除"}, status=status.HTTP_200_OK)
    
    # 編輯商品
    @action(detail=True, methods=['patch'], url_path='edit_item')
    def edit_item(self, request, pk=None):
        order = self.get_object()
        item_id = request.data.get('item_id')
        item_data = request.data.get('item_data')
        
        if not item_id or not item_data:
            return Response({"detail": "未提供項目 ID 或數據"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            item = order.items.get(id=item_id)
        except OrderItem.DoesNotExist:
            return Response({"detail": "項目不存在"}, status=status.HTTP_404_NOT_FOUND)
        
        # 只傳遞可更新的字段
        updatable_fields = ['quantity', 'price', 'note', 'is_prepared']
        update_data = {k: v for k, v in item_data.items() if k in updatable_fields}
        
        serializer = OrderItemSerializer(item, data=update_data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    
class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = OrderItemFilter

