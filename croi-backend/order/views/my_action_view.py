# DRF
from rest_framework import viewsets


# Models
from order.models.my_action import MyAction

# Serializers
from order.serializer.my_action_serializer import MyActionSerializer


class MyActionViewSet(viewsets.ModelViewSet):
    serializer_class = MyActionSerializer
    queryset = MyAction.objects.all()
