from  rest_framework import serializers
from project.models.project import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
    
    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category


    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)


    

