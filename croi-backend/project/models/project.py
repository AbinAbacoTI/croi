from dataclasses import field
from django.utils import timezone
from django.db import models
from user.models import UserJuridic, UserNatural, CustomUser


# Create your models here.
class Category(models.Model):
    name_category = models.CharField(max_length=50)

    def __str__(self) -> str:
        return str(self.name_category)


class RequestForm(models.Model):
    user_juridic = models.ForeignKey(
        UserJuridic,
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="request_form"
    )
    user_natural = models.ForeignKey(
        UserNatural,
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="request_form"
    )
    name_project = models.TextField()
    description = models.TextField()
    address = models.TextField()
    image = models.ImageField(upload_to="image", null=True)
    file = models.FileField(upload_to="documents", null=True)
    name_biznes = models.TextField()
    is_juridic = models.BooleanField()
    is_natural = models.BooleanField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return str(self.name_project)


'''    def get_absolute_image_url(self):
        return "http://127.0.0.1:8000/"+self.image.url'''


class Project(models.Model):
    request_integer = models.ForeignKey(
        RequestForm,
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="project"
    )
    category = models.ForeignKey(
        Category,
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="project"
    )
    user_admin = models.ForeignKey(
        CustomUser, null=True, blank=True, on_delete=models.SET_NULL)
    state = models.BooleanField()
    financing_choices = (
        ('A', 'ACTION'),
        ('I', 'INVESTMENT'),
        ('B', 'BOND'),
        ('L', 'LOANS')
    )
    type_financing = models.CharField(max_length=20, blank=True,choices=financing_choices)

    def __str__(self) -> str:
        return str(self.id)
