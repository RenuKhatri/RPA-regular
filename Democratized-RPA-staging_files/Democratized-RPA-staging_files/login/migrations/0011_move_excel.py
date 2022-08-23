# Generated by Django 3.1.2 on 2020-10-11 15:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('login', '0010_auto_20200817_1930'),
    ]

    operations = [
        migrations.CreateModel(
            name='Move_Excel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_location1', models.TextField()),
                ('file_location2', models.TextField()),
                ('srore_inst', models.CharField(max_length=300)),
                ('active', models.BooleanField()),
                ('user_action', models.CharField(max_length=300)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='move_excel', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Move_Excel_File', to='login.product_task')),
            ],
        ),
    ]