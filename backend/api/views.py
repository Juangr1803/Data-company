# Rest_Framework
from rest_framework import viewsets, status

from .serializers import CompanySerializer
from .models import Company


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

