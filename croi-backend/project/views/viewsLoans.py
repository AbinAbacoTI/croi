from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from project.serializers.serializersLoans import LoansSerializer
from rest_framework import viewsets
from project.models.loans import *


class LoansViewSet(viewsets.ModelViewSet):
    serializer_class = LoansSerializer
    queryset = Loans.objects.all()
