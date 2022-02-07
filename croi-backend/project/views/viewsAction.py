from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from project.serializers.serializersAction import ActionSerializer
from rest_framework import viewsets
from project.models import *


class ActionViewSet(viewsets.ModelViewSet):
    serializer_class = ActionSerializer
    queryset = Action.objects.all()
