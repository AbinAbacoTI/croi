from  rest_framework import serializers
from project.models.project import *
from project.serializers.serializersCategory import *
from project.serializers.serializersRequestForm import *

class ProjectListSerializer(serializers.ModelSerializer):
    request_integer_detail =RequestFormSerializer(source='request_integer',read_only=True)
    category_detail = CategorySerializer(source='category',read_only=True)
    
    class Meta:
        model = Project
        fields = ['id','request_integer', 'category', 'user_admin', 'state', 'type_financing','request_integer_detail','category_detail']



'''Metodo update de otro modelo
class ProjectListSerializerUpdate(serializers.ModelSerializer):
    request_integer =RequestFormSerializer()
    #category_details = CategorySerializer(source='category',read_only=True)
    class Meta:
        model = Project
        fields = ['id','request_integer', 'category', 'user_admin', 'state', 'type_financing']
        read_only_fields = ['is_juridic','is_natural','date','user_juridic','user_natural','file','image']
    def update(self,  instance, validated_data):
        project = validated_data.pop('request_integer')
        request_integer = instance.request_integer

        project_category = validated_data.pop('category_details')
        category_details = instance.category_details

        request_integer.name_project = project.get(
            'name_project',
            request_integer.name_project
        )
        request_integer.description = project.get(
            'description',
            request_integer.description
        )
        request_integer.address = project.get(
            'address',
            request_integer.address
        )
        request_integer.name_biznes = project.get(
            'name_biznes',
            request_integer.name_biznes
        )
        category_details.name_category = project_category.get(
            'name_category',
            category_details.name_category
        )
        instance.user_admin = validated_data.get('user_admin', instance.user_admin)
        instance.state = validated_data.get('state', instance.state)
        instance.type_financing = validated_data.get('type_financing', instance.type_financing)
        instance.save()
        request_integer.save()
        #category_details.save()
        return instance'''