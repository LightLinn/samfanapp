from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer
from products.models import Product

class CartViewSet(viewsets.ModelViewSet):
    serializer_class = CartSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    def list(self, request):
        cart, created = Cart.objects.get_or_create(user=request.user)
        serializer = self.get_serializer(cart)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def add_item(self, request):
        cart, created = Cart.objects.get_or_create(user=request.user)
        product_id = request.data.get('product_id')
        quantity = int(request.data.get('quantity', 0))
        note = request.data.get('note', '')
        append = request.data.get('append', False)

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        
        if append:
            cart_item.quantity += quantity
            if note:
                cart_item.note = (cart_item.note + '\n' + note).strip()
        else:
            cart_item.quantity = quantity
            cart_item.note = note
        
        cart_item.save()

        serializer = CartItemSerializer(cart_item)
        count = cart.items.count()
        return Response({'data': serializer.data, 'count': count}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['patch'])
    def update_item(self, request):
        cart_item_id = request.data.get('id')
        quantity = request.data.get('quantity')
        note = request.data.get('note')

        try:
            cart_item = CartItem.objects.get(id=cart_item_id, cart__user=request.user)
        except CartItem.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=status.HTTP_404_NOT_FOUND)

        if quantity is not None:
            cart_item.quantity = int(quantity)
        if note is not None:
            cart_item.note = note
        cart_item.save()

        serializer = CartItemSerializer(cart_item)
        count = cart_item.cart.items.count()
        return Response({'data': serializer.data, 'count': count}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['delete'])
    def remove_item(self, request):
        cart_item_id = request.data.get('id')

        try:
            cart_item = CartItem.objects.get(id=cart_item_id, cart__user=request.user)
        except CartItem.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=status.HTTP_404_NOT_FOUND)

        cart_item.delete()
        cart = request.user.carts.first()
        count = cart.items.count() if cart else 0
        return Response({'message': 'Item removed', 'count': count}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def clear(self, request):
        cart = Cart.objects.get(user=request.user)
        cart.items.all().delete()
        return Response({'message': 'Cart cleared', 'count': 0}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def get_cart_item_count(self, request):
        cart = Cart.objects.filter(user=request.user).first()
        if cart:
            count = cart.items.count()
        else:
            count = 0
        return Response({'count': count}, status=status.HTTP_200_OK)
