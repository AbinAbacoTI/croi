from  rest_framework import serializers
from project.models.investment import *

class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'

    def create(self, validated_data):
        investment = Investment.objects.create(**validated_data)
        return investment

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)