from  rest_framework import serializers
from project.models.project import *
from project.serializers.serializersCategory import *
from project.serializers.serializersRequestForm import *

class ProjectListSerializer(serializers.ModelSerializer):
    #request_integer =RequestFormSerializer()
    #category = CategorySerializer()

    request_integer = serializers.StringRelatedField()
    category = serializers.StringRelatedField()
    #image_url = serializers.CharField(source='get_absolute_image_url')
    class Meta:
        model = Project
        fields = '__all__'

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'category': instance.category.name_category,
            'name_project': instance.request_integer.name_project,
            'description': instance.request_integer.description,
            'address': instance.request_integer.address,
            'image': "http://127.0.0.1:8000/media/"+str(instance.request_integer.image),
            'name_biznes': instance.request_integer.name_biznes,
            'date': instance.request_integer.date,
            'state': instance.state,
            'type_financing': instance.type_financing

        }

