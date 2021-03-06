from  rest_framework import serializers
from project.models.project import *

class RequestFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestForm
        fields = '__all__'

    def create(self, validated_data):
        requestform = RequestForm.objects.create(**validated_data)
        return requestform

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)