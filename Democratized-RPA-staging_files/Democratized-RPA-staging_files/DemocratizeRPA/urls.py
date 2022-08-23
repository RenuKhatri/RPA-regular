"""DemocratizeRPA URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
from login import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url('', include(router.urls)),
    url(r'^home', views.master_page, name='home'),
    url(r'^nodes_page', views.nodes_page , name ='nodes_page'),
    # url(r'^nodes_page/(?P<id>\d+)/$', views.nodes_page , name ='product_tasks'),
    url(r'^action_sms', views.call_sms),
    url(r'^action_call', views.call_call),
    url(r'^action_record_web', views.call_record_web),
    url(r'^action_curebay_webautomation', views.call_curebay_webautomation),
    url(r'^action_split_pdf', views.call_split_pdf),
    url(r'^action_create_excel', views.call_cretate_excel),
    url(r'^action_open_excel', views.call_open_excel),
    url(r'^login', views.login_user,name="login"), 
    url(r'^run_task', views.run_task_method),
    url(r'^logout', views.logout_request, name="logout"), 
    url(r'^task_lists', views.task_lists), 
    url('task_lists/<slug:task_name>',views.task_lists),
    url(r'^create_task_btn', views.create_task_btn,name = 'create_task_btn'), 
    url(r'^api-auth', include('rest_framework.urls'))

    # url(r'^nodes_page/<int:task_id>/', views.nodes_page , name ='nodes_page'),

]