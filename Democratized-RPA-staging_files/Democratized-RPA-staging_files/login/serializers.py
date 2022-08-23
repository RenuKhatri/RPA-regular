from rest_framework import serializers

from .models import Create_Excel,Open_Excel,Product_Task,Send_Email


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Create_Excel
        fields = '__all__'