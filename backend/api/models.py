# Django
from django.db import models
from django.contrib.auth.models import User


class Company(models.Model):

  name = models.CharField(max_length=255)
  address = models.CharField(max_length=255)

  nit = models.IntegerField()
  phone = models.IntegerField()

  created = models.DateTimeField(auto_now_add=True)
  modified = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
