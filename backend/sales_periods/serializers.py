from rest_framework import serializers
from .models import SalesPeriod
from datetime import datetime

class SalesPeriodSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()
    
    class Meta:
        model = SalesPeriod
        fields = '__all__'

    def get_status(self, obj):
        current_date = datetime.now().date()
        if current_date < obj.start_date:
            return '預備中'
        elif current_date > obj.end_date:
            return '已結束'
        else:
            return '開放訂購'