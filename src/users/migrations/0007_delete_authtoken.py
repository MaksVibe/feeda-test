# Generated by Django 4.2.3 on 2023-07-21 15:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_authtoken_life_time_token'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AuthToken',
        ),
    ]
