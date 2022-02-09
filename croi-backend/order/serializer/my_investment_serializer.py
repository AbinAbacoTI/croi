# DRF
from rest_framework import serializers

# Models
from order.models.my_investment import MyInvestment


class MyInvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyInvestment
        fields = '__all__'
        #read_only_fields = ['my_action']

    def create(self, validated_data):
        my_investment = MyInvestment.objects.create(**validated_data)
        return my_investment

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)