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
        fields = '__all__'
        # read_only_fields = ['special_user']

    def create(self, validated_data):
        # custom_user = validated_data.pop('user')
        # user = CustomUser.objects.create(is_juridic=True, **custom_user)
        # user.save()
        my_action = MyAction.objects.create(**validated_data)
        return my_action

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)