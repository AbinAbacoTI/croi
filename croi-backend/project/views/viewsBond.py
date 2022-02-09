from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from project.serializers.serializersBond import BondSerializer
from rest_framework import viewsets
from project.models import *


class BondViewSet(viewsets.ModelViewSet):
    serializer_class = BondSerializer
    queryset = Bond.objects.all()
