from django.urls import path
from .views import ConvertCartToOrderView

urlpatterns = [
    path('convert/', ConvertCartToOrderView.as_view(), name='convert-cart-to-order'),
]
