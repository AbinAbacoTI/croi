# Django
# DRF
from rest_framework import serializers

# Models
from order.models import MyAction
# from user.serializer.custom_user_serializer import CustomUserSerializer
 

class MyActionSerializer(serializers.ModelSerializer):
    # user = CustomUserSerializer()

    class Meta:
        model = MyAction
        fields = [
            'id',
            'order',
            'created_at',
            'voucher',
            'quantity',
            'sale_price',
            'total_price',
        ]
        # read_only_fields = ['special_user']

    def create(self, validated_data):
        # custom_user = validated_data.pop('user')
        # user = CustomUser.objects.create(is_juridic=True, **custom_user)
        # user.save()
        my_action = MyAction.objects.create(**validated_data)
        return my_action

    def update(self,  MyAction, validated_data):
        # custom_user = validated_data.pop('user')
        # user = instance.user
        MyAction.id = validated_data.get('id', MyAction.id)
        MyAction.order = validated_data.get('order', MyAction.order)
        MyAction.created_at = validated_data.get('created_at', MyAction.created_at)
        MyAction.voucher = validated_data.get('voucher', MyAction.voucher)
        MyAction.quantity = validated_data.get('quantity', MyAction.quantity)
        MyAction.sale_price = validated_data.get('sale_price', MyAction.sale_price)
        MyAction.total_price = validated_data.get('total_price', MyAction.total_price)
        MyAction.save()
        # user.username = custom_user.get(
        #     'username',
        #     user.username
        # )
        # user.email = custom_user.get(
        #     'email',
        #     user.email
        # )
        # user.save()
        return MyAction