from django.db import models

from project.models.project import Project


class Loans(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="loans"
    )
    monto = models.FloatField()
    cantidad = models.IntegerField()
    tasa_interes = models.FloatField()
    cuatos = models.IntegerField()

    def __str__(self) -> str:
        return str(self.id)