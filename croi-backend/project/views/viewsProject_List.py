from re import search
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, filters
from project.serializers.serializersProject_List import ProjectListSerializer
from rest_framework import viewsets
from project.models import *

'''class Project_List_ViewSet(viewsets.ModelViewSet):'''
class Project_List_ViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProjectListSerializer
    queryset = Project.objects.all()
