# Generated by Django 3.1.2 on 2021-11-30 06:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('login', '0013_call_curebay_webautomation'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='send_email',
            options={},
        ),
        migrations.AddField(
            model_name='call',
            name='call_message',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='call',
            name='call_recipient',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='curebay_webautomation',
            name='curebay_id',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sms',
            name='message',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='sms',
            name='recipient',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.CreateModel(
            name='Record_Web',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('record_web_url', models.CharField(max_length=300, null=True)),
                ('srore_inst', models.CharField(max_length=300)),
                ('active', models.BooleanField()),
                ('user_action', models.CharField(max_length=300)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Record_Web', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Record_Web_Project', to='login.product_task')),
            ],
        ),
    ]
