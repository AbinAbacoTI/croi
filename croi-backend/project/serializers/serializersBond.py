from  rest_framework import serializers
from project.models.bond import *

class BondSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bond
        fields = '__all__'

    def create(self, validated_data):
        bond = Bond.objects.create(**validated_data)
        return bond

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)