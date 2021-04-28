# Rest-Framework
from rest_framework import serializers
# Models
from api.models import Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

