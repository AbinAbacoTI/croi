from  rest_framework import serializers
from project.models.action import *

class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = '__all__'

    def create(self, validated_data):
        action = Action.objects.create(**validated_data)
        return action

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)