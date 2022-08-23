# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# from login.models import Product_Task

# Create your models here.

class Sms(models.Model):
    owner = models.ForeignKey(User, related_name='Sms', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Sms_Project", on_delete=models.DO_NOTHING)
    recipient = models.CharField(max_length=300,null=True)
    message = models.CharField(max_length=300,null=True)
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)

class Call(models.Model):
    owner = models.ForeignKey(User, related_name='Call', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Call_Project", on_delete=models.DO_NOTHING)
    call_recipient = models.CharField(max_length=300,null=True)
    call_message = models.CharField(max_length=300,null=True)
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)

class Record_Web(models.Model):
    owner = models.ForeignKey(User, related_name='Record_Web', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Record_Web_Project", on_delete=models.DO_NOTHING)
    record_web_url = models.CharField(max_length=300, null = True)
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)

class Curebay_Webautomation(models.Model):
    owner = models.ForeignKey(User, related_name='curebay_webautomation', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Curebay_Webautomation_Project", on_delete=models.DO_NOTHING)
    curebay_id = models.CharField(max_length=300,null=True)
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)
class Split_Pdf(models.Model):
    owner = models.ForeignKey(User, related_name='split_pdf', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Split_Pdf_Project", on_delete=models.DO_NOTHING)
    split_pdf_file = models.CharField(max_length=300,null=True)
    split_pdf_destination = models.CharField(max_length=300,null=True)
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)


class Create_Excel(models.Model):
    owner = models.ForeignKey(User, related_name='excel_created', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Create_Project", on_delete=models.DO_NOTHING)
    excel_name = models.CharField(max_length=300,null=True)
    file_location = models.TextField()
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)


class Open_Excel(models.Model):
    owner = models.ForeignKey(User, related_name='open_created', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Open_Project", on_delete=models.DO_NOTHING)
    excel_name = models.CharField(max_length=300)
    file_location = models.TextField()
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)


class Send_Email(models.Model):
    owner = models.ForeignKey(User, related_name='Send_Email', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Send_Project", on_delete=models.DO_NOTHING)
    email_to = models.CharField(max_length=300)
    email_subject = models.CharField(max_length=300)
    msg = models.TextField()
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)

    # class Meta:
    #     ordering = ['created']


class Move_Excel(models.Model):
    owner = models.ForeignKey(User, related_name='move_excel', on_delete=models.DO_NOTHING)
    project = models.ForeignKey("Product_Task", related_name="Move_Excel_File", on_delete=models.DO_NOTHING)
    file_location1 = models.TextField()
    file_location2 = models.TextField()
    srore_inst = models.CharField(max_length=300)
    active = models.BooleanField()
    user_action = models.CharField(max_length=300)


class Product_Task(models.Model):
    owner = models.ForeignKey(User, related_name='user_name', on_delete=models.DO_NOTHING)
    product_name = models.CharField(max_length=80)
    body = models.TextField()
    node_array = models.TextField(max_length=100, null=True)
    connection_array = models.TextField(max_length=100, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    start_node = models.TextField(max_length=100, null=True)
    popup_array = models.TextField(max_length=100, null=True)

    class Meta:
        ordering = ('created',)

    # def __str__(self):
    #     return self.product_name, self.owner
