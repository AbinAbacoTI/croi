from  rest_framework import serializers
from project.models.loans import *

class LoansSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loans
        fields = '__all__'

    def create(self, validated_data):
        loans = Loans.objects.create(**validated_data)
        return loans

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)