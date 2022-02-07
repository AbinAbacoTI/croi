from  rest_framework import serializers
from project.models.project import *

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    
    def create(self, validated_data):
        project = Project.objects.create(**validated_data)
        return project


    def update(self,  instance, validated_data):
        return super().update(instance, validated_data)
