# DRF
from rest_framework import serializers

# Models
from user.models import CustomUser, UserNatural
from user.serializer.custom_user_serializer import CustomUserSerializer


class UserNaturalSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = UserNatural
        fields = [
            'id',
            'user',
            'special_user',
            'DNI',
            'first_name',
            'last_name',
        ]
        read_only_fields = ['special_user']

    def create(self, validated_data):
        custom_user = validated_data.pop('user')
        password = custom_user.pop('password')
        user = CustomUser.objects.create(is_natural=True, **custom_user)
        user.set_password(password)
        user.save()
        user_natural = UserNatural.objects.create(user=user, **validated_data)
        return user_natural
    
    def update(self,  instance, validated_data):
        custom_user = validated_data.pop('user')
        user = instance.user
        instance.DNI = validated_data.get('DNI', instance.DNI)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
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
