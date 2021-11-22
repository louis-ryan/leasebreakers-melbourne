# Generated by Django 3.2.9 on 2021-11-22 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20211122_1415'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='created_at',
        ),
        migrations.AddField(
            model_name='room',
            name='host',
            field=models.CharField(default='', max_length=50, unique=True),
        ),
    ]