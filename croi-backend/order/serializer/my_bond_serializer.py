# DRF
from rest_framework import serializers

# Models
from order.models.my_bond import MyBond


class MyBondSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyBond
        fields = [
            'id',
            'order',
            'created_at',
            'voucher',
        ]
        #read_only_fields = ['my_action']

    def create(self, validated_data):
        # custom_user = validated_data.pop('user')
        # user = CustomUser.objects.create(is_juridic=True, **custom_user)
        # user.save()
        my_bond = MyBond.objects.create(**validated_data)
        return my_bond

    def update(self,  MyBond, validated_data):
        # custom_user = validated_data.pop('user')
        # user = instance.user
        MyBond.id = validated_data.get('id', MyBond.id)
        MyBond.order = validated_data.get('order', MyBond.order)
        MyBond.created_at = validated_data.get('created_at', MyBond.created_at)
        MyBond.voucher = validated_data.get('voucher', MyBond.voucher)
        MyBond.save()
        return MyBond