from project.serializers.serializersProject_List import ProjectListSerializer
from rest_framework import viewsets
from project.models import *


class Project_List_ViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectListSerializer
    queryset = Project.objects.all()

'''Metodo get claas para anidar dos serializers
class Project_List_ViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectListSerializer
    queryset = Project.objects.all()
    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectListSerializer
        if self.action == 'update':
            return ProjectListSerializerUpdate
        return ProjectListSerializer'''
