from project.serializers.serializersProject import ProjectSerializer
from rest_framework import viewsets
from project.models import *

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()