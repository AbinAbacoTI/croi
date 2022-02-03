# DRF
from rest_framework import viewsets

# Models
from user.models import CustomUser

# Serializers
from user.serializer.custom_user_serializer import  CustomUserSerializer


class  CustomUserViewSet(viewsets.ModelViewSet):
    serializer_class =  CustomUserSerializer
    queryset = CustomUser.objects.all()