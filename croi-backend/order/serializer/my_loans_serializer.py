# DRF
from rest_framework import serializers

# Models
from order.models.my_loans import MyLoans


class MyLoansSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyLoans
        fields = '__all__'
        #read_only_fields = ['my_action']

    def create(self, validated_data):
        # custom_user = validated_data.pop('user')
        # user = CustomUser.objects.create(is_juridic=True, **custom_user)
        # user.save()
        my_loans = MyLoans.objects.create(**validated_data)
        return my_loans

    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)