# DRF
from rest_framework import viewsets

# Models
from order.models.my_loans import MyLoans

# Serializers
from order.serializer.my_loans_serializer import MyLoansSerializer


class MyLoansViewSet(viewsets.ModelViewSet):
    serializer_class = MyLoansSerializer
    queryset = MyLoans.objects.all()