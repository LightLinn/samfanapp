from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from orders.models import Order, OrderItem
from sales_periods.models import SalesPeriod
from carts.models import Cart, CartItem
from orders.serializers import OrderSerializer
import logging

logger = logging.getLogger(__name__)

class ConvertCartToOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        customer_name = request.data.get('customerName')
        customer_mobile = request.data.get('customerMobile')
        pickup_date = request.data.get('pickupDate')

        if not all([customer_name, customer_mobile, pickup_date]):
            return Response({"錯誤": "請提供所有必要的訂單信息"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart = Cart.objects.get(user=user)
            
        except Cart.DoesNotExist:
            return Response({"錯誤": "沒有找到購物車"}, status=status.HTTP_404_NOT_FOUND)

        cart_items = CartItem.objects.filter(cart=cart)
        
        if not cart_items.exists():
            return Response({"錯誤": "購物車是空的"}, status=status.HTTP_400_BAD_REQUEST)

        # 獲取當前銷售檔期
        try:
            sales_period = SalesPeriod.objects.get(status='開放訂購')
            print(sales_period)

        except SalesPeriod.DoesNotExist:
            return Response({'detail': '當前沒有開放訂購的銷售檔期。'}, status=status.HTTP_400_BAD_REQUEST)
        

        order = Order.objects.create(
            user=user,
            customer_name=customer_name,
            customer_mobile=customer_mobile,
            sales_period=sales_period,
            status='備貨中',
            pickup_date=pickup_date,
            total_amount=0,
            box_number=''
        )

        # TODO
        # 計算總金額

        for cart_item in cart_items:
            for _ in range(cart_item.quantity):
                OrderItem.objects.create(
                    order=order,
                    product=cart_item.product,
                    quantity=1,
                    note=cart_item.note
                )

        order.save()

        cart_items.delete()

        order_serializer = OrderSerializer(order)
        return Response(order_serializer.data, status=status.HTTP_201_CREATED)
