# Generated by Django 5.0 on 2024-04-13 06:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_customuser_activated'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='is_superuser',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='user_permissions',
        ),
    ]
