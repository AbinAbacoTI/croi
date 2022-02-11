from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, filters
from project.serializers.serializersProject import ProjectSerializer
from rest_framework import viewsets
from project.models import *

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    filters_backends = (filters.SearchFilter,)
    search_fields = ('name', 'state',)