# Django
# DRF
from rest_framework import serializers

# Models
from user.models import CustomUser, UserJuridic
from user.serializer.custom_user_serializer import CustomUserSerializer


class UserJuridicSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = UserJuridic
        fields = [
            'id',
            'user',
            'special_user',
            'RUC',
            'name',
            'manager',
        ]
        read_only_fields = ['special_user']

    def create(self, validated_data):
        custom_user = validated_data.pop('user')
        password = custom_user.pop('password')
        user = CustomUser.objects.create(is_juridic=True, **custom_user)
        user.set_password(password)
        user.save()
        user_juridic = UserJuridic.objects.create(user=user, **validated_data)
        return user_juridic

    def update(self,  instance, validated_data):
        custom_user = validated_data.pop('user')
        user = instance.user
        instance.RUC = validated_data.get('RUC', instance.RUC)
        instance.name = validated_data.get('name', instance.name)
        instance.manager = validated_data.get('manager', instance.manager)
        instance.save()
        user.username = custom_user.get(
            'username',
            user.username
        )
        user.email = custom_user.get(
            'email',
            user.email
        )
        user.save()
        return instance

