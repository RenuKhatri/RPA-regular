# Generated by Django 3.1.2 on 2021-12-14 04:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('login', '0014_auto_20211130_1132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='create_excel',
            name='excel_name',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.CreateModel(
            name='Split_Pdf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('split_pdf_file', models.CharField(max_length=300, null=True)),
                ('split_pdf_destination', models.CharField(max_length=300, null=True)),
                ('srore_inst', models.CharField(max_length=300)),
                ('active', models.BooleanField()),
                ('user_action', models.CharField(max_length=300)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='split_pdf', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Split_Pdf_Project', to='login.product_task')),
            ],
        ),
    ]
