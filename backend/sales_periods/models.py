from django.db import models
from django.core.exceptions import ValidationError
from django.db.models import Q

# Create your models here.

class SalesPeriod(models.Model):
    name = models.CharField(max_length=100)  # 檔期名稱
    start_date = models.DateField()  # 開始日期
    end_date = models.DateField()  # 結束日期

    class Meta:
        db_table = 'sales_period'
        verbose_name = '檔期'
        verbose_name_plural = '檔期'

    def __str__(self):
        return self.name

    def clean(self):
        # 檢查開始日期是否小於結束日期
        if self.start_date and self.end_date and self.start_date > self.end_date:
            raise ValidationError('開始日期必須早於結束日期。')

        # 檢查日期區間是否與其他檔期重疊
        overlapping_periods = SalesPeriod.objects.filter(
            Q(start_date__lte=self.end_date) & Q(end_date__gte=self.start_date)
        ).exclude(pk=self.pk)

        if overlapping_periods.exists():
            raise ValidationError('此檔期的日期區間與其他檔期重疊。')

    def save(self, *args, **kwargs):
        self.clean() 
        super().save(*args, **kwargs)