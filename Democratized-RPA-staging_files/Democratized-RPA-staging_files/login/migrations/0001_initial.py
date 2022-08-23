# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-07-09 10:53
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Create_Excel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('excel_name', models.CharField(max_length=300)),
                ('file_location', models.TextField()),
                ('srore_inst', models.CharField(max_length=300)),
                ('active', models.BooleanField()),
                ('user_action', models.CharField(max_length=300)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='excel_created', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Open_Excel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('excel_name', models.CharField(max_length=300)),
                ('file_location', models.TextField()),
                ('srore_inst', models.CharField(max_length=300)),
                ('active', models.BooleanField()),
                ('user_action', models.CharField(max_length=300)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='open_created', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
