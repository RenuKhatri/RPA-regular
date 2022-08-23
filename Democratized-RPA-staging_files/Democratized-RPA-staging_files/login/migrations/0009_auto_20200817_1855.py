# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2020-08-17 18:55
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0008_send_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='send_email',
            name='Product_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Project_Task', to='login.Product_Task'),
        ),
    ]
