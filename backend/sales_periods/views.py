from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from .models import SalesPeriod
from .serializers import SalesPeriodSerializer
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.decorators import action

class SalesPeriodViewSet(viewsets.ModelViewSet):
    queryset = SalesPeriod.objects.all()
    serializer_class = SalesPeriodSerializer
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='current')
    def current(self, request):
        now = timezone.now()
        current_period = self.queryset.filter(start_date__lte=now, end_date__gte=now).first()
        
        if current_period:
            serializer = self.get_serializer(current_period)
            return Response({
                "data": serializer.data,
                "message": "當前有進行中的銷售檔期"
            })
        else:
            return Response({
                "data": None,
                "message": "沒有進行中的銷售檔期"
            }, status=status.HTTP_200_OK)



