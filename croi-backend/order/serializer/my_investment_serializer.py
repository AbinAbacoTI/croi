# DRF
from rest_framework import serializers

# Models
from order.models.my_investment import MyInvestment


class MyInvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyInvestment
        fields = [
            'id',
            'order',
            'created_at',
            'voucher',
            'total_price',
        ]
        #read_only_fields = ['my_action']

    def create(self, validated_data):
        my_investment = MyInvestment.objects.create(**validated_data)
        return my_investment

    def update(self,  MyInvestment, validated_data):
        MyInvestment.id = validated_data.get('id', MyInvestment.id)
        MyInvestment.order = validated_data.get('order', MyInvestment.order)
        MyInvestment.created_at = validated_data.get('created_at', MyInvestment.created_at)
        MyInvestment.voucher = validated_data.get('voucher', MyInvestment.voucher)
        MyInvestment.total_price = validated_data.get('total_price', MyInvestment.total_price)
        MyInvestment.save()
        return MyInvestment