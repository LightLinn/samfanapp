# Generated by Django 5.1 on 2024-09-10 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0004_alter_cartitem_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='note',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]
