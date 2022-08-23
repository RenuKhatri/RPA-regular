from django.shortcuts import render
from login.Duplicate import fitz_extract
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.decorators import api_view
# from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework.request import Request
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import render, redirect
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework import status
from django.http import JsonResponse
from django.core import serializers
from django.conf import settings
from django.core.mail import send_mail
import json
import pdb
from django.http import HttpResponse
from django.template import loader
# from django.shortcuts import render_to_response
from django.contrib import messages
from .models import Create_Excel, Open_Excel, Product_Task, Send_Email, Sms, Call, Curebay_Webautomation, Record_Web, Split_Pdf
from .serializers import UserSerializer
import os
import shutil
import xlsxwriter
from django.views.decorators.csrf import csrf_protect
from random import randint
from django.contrib.auth.models import User
import ast
import os
import time
import os
from datetime import date
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time
from bs4 import BeautifulSoup as bs
import selenium.common.exceptions
from selenium.webdriver.common.keys import Keys
import pandas as pd
import shutil
from twilio.rest import Client
import csv
import glob
import openpyxl
import os
import psycopg2
import datetime
import time
# import fitz # PyMuPDF
import io
from PIL import Image
from xlsxwriter.workbook import Workbook
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders


# Create your views here.
global driver

class UserViewSet(viewsets.ModelViewSet):
    queryset = Create_Excel.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def Idealweight(request, *args, **kwargs):
    try:
        height = json.loads(request.body)
        weight = str(height * 10)
        next_node = "Node-1"
        prv_node = "start"
        subject = "Node has been Moved Next state"
        message = "Next Node is '{}' from {}.".format(next_node, prv_node)
        send_mail(subject, message, 'pawanzhi57@gmail.com', ['pawanzhi57@gmail.com'])
        sent = True
        return JsonResponse("Node has been Moved :" + weight + " degree", safe=False)
    except ValueError as e:
        return Response(e.arg[0], status.HTTP_400_BAD_REQUEST)


@csrf_protect
def task_lists(request, task_name='defult'):
    # pdb.set_trace()
    project = Product_Task()
    sent_email_obj = Send_Email()
    create_excel_obj = Create_Excel()
    open_excel_obj = Open_Excel()
    sms_obj = Sms()
    call_obj = Call()
    curebay_webautomation_obj = Curebay_Webautomation()
    record_web_obj = Record_Web()
    split_pdf_obj = Split_Pdf()

    product_obj = Product_Task.objects.all()
    context = {
        'task_lists': product_obj
    }
    data = {}
    if request.POST.get('task_button'):
        product_obj_id = product_obj.get(product_name=request.POST.get('task_button'))
        connection_array = product_obj_id.connection_array
        node_array = product_obj_id.node_array
        start_node = product_obj_id.start_node
        context = {
            'node_array': node_array,
            'connection_array': connection_array,
            'start_node': start_node,

        }
        # context1 = {
        # 		'connection_array' : connection_array,

        # }
        # print context
        return (JsonResponse(context))
    # data['success'] = str(request.POST.get('task_button'))
    # return HttpResponse(JsonResponse(data))
    # return render(request, 'nodes_page.html',context)

    else:
        # /task_lists
        # user = User.objects.get(id=request.user.id)
        project.owner = User.objects.get(id=request.user.id)
        project.body = request.POST
        project.node_array = request.POST.get('node_array')
        project.connection_array = request.POST.get('connection_array')
        project.start_node = request.POST.get('start_node')
        project.product_name = request.POST.get('product_name')
        project.popup_array = request.POST.get('popup_array')
        project.save()
        # print(project.id)
        # SEND EMail Code
        pop_list = ast.literal_eval(request.POST.get('pop_list'))
        popup_array = ast.literal_eval(request.POST.get('popup_array'))

        if 'SMS' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'SMS']
            sms_obj.project = product_obj.get(id=project.id)
            sms_obj.owner = User.objects.get(id=request.user.id)
            sms_obj.recipient = filtered[0].get('values')[0]
            sms_obj.message = filtered[0].get('values')[1]
            sms_obj.active = 't'
            sms_obj.user_action = 'SMS'
            sms_obj.save()

        if 'Call' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'Call']
            call_obj.project = product_obj.get(id=project.id)
            call_obj.owner = User.objects.get(id=request.user.id)
            call_obj.call_recipient = filtered[0].get('values')[0]
            call_obj.call_message = filtered[0].get('values')[1]
            call_obj.active = 't'
            call_obj.user_action = 'Call'
            call_obj.save()

        if 'Record Web' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'Record Web']
            record_web_obj.project = product_obj.get(id=project.id)
            record_web_obj.owner = User.objects.get(id=request.user.id)
            record_web_obj.record_web_url = filtered[0].get('values')[0]
            record_web_obj.active = 't'
            record_web_obj.user_action = 'Record Web'
            record_web_obj.save()

        if 'CureBay Web Automation' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'CureBay Web Automation']
            curebay_webautomation_obj.project = product_obj.get(id=project.id)
            curebay_webautomation_obj.owner = User.objects.get(id=request.user.id)
            curebay_webautomation_obj.curebay_id = filtered[0].get('values')[0]
            curebay_webautomation_obj.active = 't'
            curebay_webautomation_obj.user_action = 'CureBay Web Automation'
            curebay_webautomation_obj.save()
        if 'Extract Image From Pdf' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'Extract Image From Pdf']
            split_pdf_obj.project = product_obj.get(id=project.id)
            split_pdf_obj.owner = User.objects.get(id=request.user.id)
            split_pdf_obj.split_pdf_file = filtered[0].get('values')[0]
            split_pdf_obj.split_pdf_destination = filtered[0].get('values')[1]
            split_pdf_obj.active = 't'
            split_pdf_obj.user_action = 'Extract Image From Pdf'
            split_pdf_obj.save()

        if 'Send Email' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'Send Email']
            sent_email_obj.project = product_obj.get(id=project.id)
            sent_email_obj.owner = User.objects.get(id=request.user.id)
            sent_email_obj.email_to = filtered[0].get('values')[0]
            sent_email_obj.email_subject = filtered[0].get('values')[1]
            sent_email_obj.msg = filtered[0].get('values')[2]
            sent_email_obj.active = 't'
            sent_email_obj.user_action = 'Send Email'
            sent_email_obj.save()

        if 'Create Excel' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'Create Excel']
            create_excel_obj.project = product_obj.get(id=project.id)
            create_excel_obj.excel_name = filtered[0].get('values')[0]
            create_excel_obj.file_location = filtered[0].get('values')[1] if filtered[0].get('values')[1] else "RPA"
            create_excel_obj.owner = request.user
            create_excel_obj.user_action = 'Create Excel'
            create_excel_obj.active = True
            create_excel_obj.save()

        if 'Open Excel' in pop_list:
            filtered = [li for li in popup_array if li.get('name') == 'Create Excel']
            open_excel_obj.project = product_obj.get(id=project.id)
            open_excel_obj.excel_name = filtered[0].get('values')[0]
            open_excel_obj.file_location = filtered[0].get('values')[1]
            open_excel_obj.owner = request.user
            open_excel_obj.user_action = 'Open Excel'
            open_excel_obj.active = True
            open_excel_obj.save()

        else:
            pass

        # END SEND EMAIL CODE
        data['success'] = "Product Task Has been Crated"
        return HttpResponse(JsonResponse(data))


def master_page(request):
    product_obj = Product_Task.objects.all()
    context = {
        'task_lists': product_obj
    }
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, 'master_page.html', context)


def nodes_page(request, id=None):
    # obj=Noned
    # if id:
    # 	obj = Product_Task.objects.get(id=id)
    # context ={"object":obj}
    product_obj = Product_Task.objects.all()
    context = {
        'task_lists': product_obj
    }
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, 'nodes_page.html', context)


def login_user(request):
    # View code here...
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            pass
    else:
        form = AuthenticationForm()
        username = request.GET.get('username')
        password = request.GET.get('pswd')
        if username and password:
            # print request.GET.get('username')
            # print request.GET.get('pswd')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return render(request, 'master_page.html')
            else:
                messages.error(request, 'username or password not correct')

    return render(request, 'login.html', {'form': form})


def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect('login')


# return render(request, 'login.html')


def call_sms(request):
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))


    elif request.POST.get('recipient') and request.POST.get('message'):
        post = Sms()
        post.recipient = request.POST.get('recipient')
        post.message = request.POST.get('message')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')


def call_call(request):
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))

    elif request.POST.get('call_recipient') and request.POST.get('call_message'):
        post = Call()
        post.call_recipient = request.POST.get('call_recipient')
        post.call_message = request.POST.get('call_message')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')

def call_record_web(request):
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))

    elif request.POST.get('record_web_url'):
        post = Record_Web()
        post.record_web_url = request.POST.get('record_web_url')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')


def call_curebay_webautomation(request):
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))


    elif request.POST.get('curebay_id'):

        post = Curebay_Webautomation()
        post.curebay_id = request.POST.get('curebay_id')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')


def call_split_pdf(request):
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))


    elif request.POST.get('split_pdf_file') and request.POST.get('split_pdf_destination'):

        post = Split_Pdf()
        post.split_pdf_file = request.POST.get('split_pdf_file')
        post.split_pdf_destination = request.POST.get('split_pdf_destination')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')


def call_cretate_excel(request):
    # pdb.set_trace()
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))
    # post=Create_Excel()
    # post.excel_name= request.POST.get('excel_name')
    # post.file_location= request.POST.get('outputfile')
    # post.owner = request.user
    # post.active = True
    # post.user_action = 'create_excel'
    # post.save()
    # # data ={
    # # 	'message' : 'data is saved'
    # # }
    # # return JsonResponse(data)
    # data['success'] = "data Has been saved"
    # return HttpResponse(JsonResponse(data))

    elif request.POST.get('excel_name') and request.POST.get('file_location'):
        post = Create_Excel()
        post.excel_name = request.POST.get('excel_name')
        post.file_location = request.POST.get('file_location')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')


def call_open_excel(request):
    # pdb.set_trace()
    data = {}
    if request.is_ajax():
        data['success'] = "saved"
        return HttpResponse(JsonResponse(data))
    # post=Open_Excel()
    # post.excel_name= request.POST.get('excel_name')
    # post.file_location= request.POST.get('file_location')
    # post.owner = request.user
    # post.active = True
    # post.user_action = 'open_excel'
    # post.save()
    # # data ={
    # # 	'message' : 'data is saved'
    # # }
    # # return JsonResponse(data)
    # data['success'] = "data Has been saved"
    # return HttpResponse(JsonResponse(data))

    elif request.POST.get('open_name') and request.POST.get('file_location'):
        post = Open_Excel()
        post.excel_name = request.POST.get('excel_name')
        post.file_location = request.POST.get('file_location')
        post.owner = request.user
        post.active = True
        post.save()
        return render(request, 'nodes_page.html')
    else:
        return render(request, 'nodes_page.html')


def run_task_method(request):
    # pdb.set_trace()
    success_respose = {}
    no_active_id = {}
    success_respose['success'] = "Successfully! Please check"
    no_active_id['success'] = "Already Created!"
    task_perform = ast.literal_eval(request.POST.get('popup'))
    user_id = request.user
    for task in task_perform:
        print('task perform:------------', task_perform)
        if task == 'Send Email':
            data_response = {}
            data_response['success'] = {'Send Email': 'success'}
            active_id = list(Send_Email.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(
                user_action='Send Email'))
            if len(active_id) == 0:
                return HttpResponse(JsonResponse(data_response))
            else:
                for name in active_id:
                    email_to = str(name.email_to)
                    subject = str(name.email_subject)
                    message = str(name.msg)
                    send_mail(subject, message, 'shrey.saxena@sequelstring.com', [email_to])
                    sent = True
                    name.active = False
                    name.save()
        if task == 'SMS':
            data_response = {}
            data_response['success'] = {'SMS': 'success'}
            active_id = list(Sms.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(user_action='SMS'))
            if len(active_id) == 0:
                return HttpResponse(JsonResponse(data_response))
            else:
                for name in active_id:
                    recipient = str(name.recipient)
                    message = str(name.message)
                    account_sid = 'AC10ca859f317dcac08ee736824a55ba94'
                    auth_token = '911b40a5065df92f7723356e14f99c99'
                    client = Client(account_sid, auth_token)
                    message = client.messages \
                        .create(body=message,
                                from_="+19033267967",
                                to="+91" + recipient
                                )
                    print("SMS sid is: ", message.sid)
                    name.active = False
                    name.save()
        if task == 'Call':
            data_response = {}
            data_response['success'] = {'Call': 'success'}
            active_id = list(
                Call.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(user_action='Call'))
            if len(active_id) == 0:
                return HttpResponse(JsonResponse(data_response))
            else:
                for name in active_id:
                    call_recipient = str(name.call_recipient)
                    call_message = str(name.call_message)
                    account_sid = 'AC10ca859f317dcac08ee736824a55ba94'
                    auth_token = '911b40a5065df92f7723356e14f99c99'
                    client = Client(account_sid, auth_token)
                    call = client.calls.create(
                        url='http://demo.twilio.com/docs/voice.xml',
                        from_="+19033267967",
                        to="+91"+call_recipient
                    )
                    print('Call SID is: ',call.sid)
                    name.active = False
                    name.save()

        if task == 'Record Web':
            data_response = {}
            data_response['success'] = {'Record Web': 'success'}
            active_id = list(
                Record_Web.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(user_action='Record Web'))
            print('--------------ACTIVE id:' , active_id)
            if len(active_id) == 0:
                return HttpResponse(JsonResponse(data_response))
            else:
                # print('yes:----------------------------------------', record_web_url)
                for name in active_id:
                    record_web_url = str(name.record_web_url)
                    print('yes::::::',record_web_url)
                    options = webdriver.ChromeOptions()
                    driver = webdriver.Chrome(options=options, executable_path=r'C:\chromedriver.exe')
                    driver.get(record_web_url)
                    driver.maximize_window()
                    name.active = False
                    name.save()

        if task == 'CureBay Web Automation':
            def curebay_login():
                options = webdriver.ChromeOptions()
                driver = webdriver.Chrome(options=options, executable_path=r'C:\chromedriver.exe')
                driver.get(r'https://curebaycrmtest.simplecrmdev.com/')
                driver.maximize_window()
                user = '//*[@id="user_name"]'
                user_element = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH, user))).send_keys('sachidanand')
                password_ = '//*[@id="username_password"]'
                password_element = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH, password_))).send_keys('sachidanand@123')
                sign_in = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH, '//*[@id="form"]/input'))).click()
                time.sleep(2)
                drop_down = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH, "//a/i"))).click()
                document = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH,
                                                    "//a[contains(@href, 'index.php?module=Documents&action=index&parentTab=All')]"))).click()
                plus = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located(
                        (By.XPATH, '//*[@id="pagination"]/td/table/tbody/tr/td[1]/ul[6]/li'))).click()
                window_after = driver.window_handles[1]
                driver.switch_to.window(window_after)
                choose_file = WebDriverWait(driver, 12).until(
                    EC.presence_of_element_located((By.XPATH, '//*[@id="filename_file"]')))
                choose_file.send_keys(r'C:\Users\shrey\Downloads\2021-11-19.csv')
                choose_file_name = WebDriverWait(driver, 12).until(
                    EC.presence_of_element_located((By.XPATH, '//*[@id="document_name"]'))).send_keys('file-27102021')
                save_file = WebDriverWait(driver, 12).until(
                    EC.presence_of_element_located((By.XPATH, '//*[@id="SAVE"]'))).click()
                handles = driver.window_handles
                driver.switch_to.window(driver.window_handles[1])
                time.sleep(10)
                return "success"

            def data_conversion(filename):
                read_file = pd.read_excel(filename)
                read_file.to_csv(r'C:\Users\Abhigyan\Downloads\report.csv', index=None, header=True)
                today = date.today()
                os.rename(r"C:\Users\Abhigyan\Downloads\report.csv", f'{today}.csv')

            def move_file():
                shutil.move(r"C:\Users\Abhigyan\Downloads\2021-11-19.csv", r"C:\Users\Abhigyan\Desktop")

            def path():
                global driver
                options = webdriver.ChromeOptions()
                options.add_experimental_option("excludeSwitches", ["enable-logging"])
                driver = webdriver.Chrome(options=options, executable_path=r'C:\chromedriver.exe')
                driver.maximize_window()

            def url_name(url):
                global driver
                driver.get(url)

            def login(email, password):
                global driver
                email = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH, r'//*[@id="username"]'))
                )
                email.send_keys('Curebay.bamanala@gmail.com')
                # time.sleep(6)

                password = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH, r'//*[@id="Password"]'))
                )
                password.send_keys('Welcome@123')
                # time.sleep(6)

                login = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH,
                                                    r'/html/body/app-root/app-login/div/div/div/div/div/div/div[3]/div/div[1]/div/div/div/form/div[4]/button'))
                )
                # time.sleep(3)

                login.click()
                # time.sleep(3)
                reports = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located(
                        (By.XPATH, r'/html/body/app-root/app-home/app-header/div/div/div/ul/p[4]/li/a'))
                )
                time.sleep(5)
                reports.click()
                enroll = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located(
                        (By.XPATH, r'/html/body/app-root/app-home/app-header/div/div/div/ul/p[4]/li/ul/p[3]/li/a'))
                )
                enroll.click()
                # time.sleep(3)
                fil = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH,
                                                    r'/html/body/app-root/app-home/div/app-admin/div/div/div/div/div/div[2]/app-reports/app-patient-report/div/div/div[2]/div[2]/div/div[1]/div')))
                fil.click()
                time.sleep(1)
                form = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH,
                                                    r'/html/body/app-root/app-home/div/app-admin/div/div/div/div/div/div[2]/app-reports/app-patient-report/p-dialog/div/div/div[2]/p/app-filter-patient-report/div/div/div[1]/div/p-calendar/span/input'))
                )
                form.send_keys('18/11/2021')
                to = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.XPATH,
                                                    r'/html/body/app-root/app-home/div/app-admin/div/div/div/div/div/div[2]/app-reports/app-patient-report/p-dialog/div/div/div[2]/p/app-filter-patient-report/div/div/div[2]/div/p-calendar/span/input'))
                )
                to.send_keys('19/11/2021')

                try:
                    ok = WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.XPATH,
                                                        r'/html/body/app-root/app-home/div/app-admin/div/div/div/div/div/div[2]/app-reports/app-patient-report/p-dialog/div/div/div[3]/button[2]'))
                    )
                    ok.click()
                    time.sleep(2)
                except:
                    pass
                try:
                    Export = WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.XPATH,
                                                        r'/html/body/app-root/app-home/div/app-admin/div/div/div/div/div/div[2]/app-reports/app-patient-report/div/div/div[2]/div[2]/div/div[2]'))).click()
                except:
                    pass

            def trigger():
                print(path())
                print(url_name("http://18.118.194.83/"))
                print(login('Curebay.bamanala@gmail.com', 'Welcome@123'))
                time.sleep(30)
                print(data_conversion(r'C:\Users\shrey\Downloads\PatientReport.xlsx'))
                time.sleep(10)
                # print(move_file())
                time.sleep(2)
                print(curebay_login())
            data_response = {}
            data_response['success'] = {'CureBay Web Automation': 'success'}
            active_id = list(
                Curebay_Webautomation.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(
                    user_action='CureBay Web Automation'))
            if len(active_id) == 0:
                return HttpResponse(JsonResponse(data_response))
            else:
                for name in active_id:
                    curebay_id = str(name.curebay_id)
                    print(curebay_id)
                    trigger()
                    name.active = False
                    name.save()

        if task == 'Extract Image From Pdf':
            data_response = {}
            data_response['success'] = {'Split PDF': 'success'}
            active_id = list(
                Split_Pdf.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(user_action='Split PDF'))
            if len(active_id) == 0:
                return HttpResponse(JsonResponse(data_response))
            else:
                for name in active_id:
                    split_pdf_file = str(name.split_pdf_file)
                    split_pdf_destination = str(name.split_pdf_destination)
                    # print('split pdf::::::')
                    print(fitz_extract())
                    print('Extract Image From Pdf')
                    # pdf_file = fitz.open(r"C:\Users\shrey\Downloads\Template data filled\E&C Report.pdf")
                    # for page_index in range(len(pdf_file)):
                    #     page = pdf_file[page_index]
                    #     image_list = page.getImageList()
                    #     for image_index, img in enumerate(page.getImageList(), start=1):
                    #         xref = img[0]
                    #         base_image = pdf_file.extractImage(xref)
                    #         image_bytes = base_image["image"]
                    #         image_ext = base_image["ext"]
                    #         image = Image.open(io.BytesIO(image_bytes))
                    #         image.save(open(f"image{page_index+1}_{image_index}.{image_ext}", "wb"))

                    name.active = False
                    name.save()

        if task == 'Create Excel':
            home = os.getcwd()
            active_id = list(Create_Excel.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(
                user_action='Create Excel'))
            if len(active_id) == 0:
                pass
            for name in active_id:
                excel_name = str(name.excel_name)
                if os.name == 'nt':
                    desktop = os.path.join(os.path.join(os.environ['USERPROFILE']), '\RPA')
                else:
                    desktop = os.path.join(os.path.join(os.path.expanduser('~')), '\RPA')
                # os.chdir(os.path.dirname(os.path.realpath(__file__))+'/create_excel_file')
                # file_name  = os.getcwd()+'/'+excel_name+'.xlsx'
                print('------', str(desktop))
                os.chdir(desktop)
                if not os.path.exists('RPA'):
                    os.makedirs('RPA')
                desktop = desktop + '/RPA'
                file_name = desktop + '/' + excel_name + '.xlsx'
                workbook = xlsxwriter.Workbook(file_name)
                worksheet = workbook.add_worksheet()
                workbook.close()
                os.chdir(home)
                name.active = False
                name.save()

        if task == 'Open Excel':
            active_id = list(Open_Excel.objects.all().filter(active='t').filter(owner_id=user_id.id).filter(
                user_action='Open Excel'))
            home = os.getcwd()
            if len(active_id) == 0:
                pass
            for name in active_id:
                excel_name = str(name.excel_name)

    # return redirect('nodes_page')
    return HttpResponse(JsonResponse(success_respose))


# # else:
# # 		return render(request,'nodes_page.html')

def create_task_btn(request):
    if request.method == 'POST':
        # pdb.set_trace()
        return redirect('nodes_page.html')
    # pdb.set_trace()
    return render(request, 'nodes_page.html')
