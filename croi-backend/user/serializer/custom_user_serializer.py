# Django
from django.contrib.auth.password_validation import validate_password

# DRF
from rest_framework import serializers

# Models
from user.models import CustomUser



class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        required=True, min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id',
                  'email',
                  'username',
                  'date_joined',
                  'password',
                  'is_staff',
                  'is_active',
                  'is_superuser',
                  ]
        read_only_fields = ['is_superuser', 'is_staff', 'is_active']
        extra_kwargs = {'password': {'write_only': True}}

    # Validate if existe one user with the same email
    def validate_email(self, value):
        user = CustomUser.objects.filter(email=value)
        if user.exists():
            raise serializers.ValidationError("This email is invalid")
        else:
            return value

    def validate_password(self, value):
        validate_password(value)
        return value

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        validate_password(password)  # if is not valid, return ValidationError
        instance.set_password(password)
        instance.save()

        return instance