# DRF
from rest_framework import serializers

# Models
from order.models.order import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        #read_only_fields = ['my_action']

    def create(self, validated_data):
        order = Order.objects.create(**validated_data)
        return order

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)