from django.db import models

from project.models.project import Project


class Action(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="action"
    )
    stock = models.IntegerField()
    sale_price = models.FloatField()
    purchase_price = models.FloatField()
    remaining_shares = models.IntegerField()
    specific_number = models.CharField(max_length=20)

    def __str__(self) -> str:
        return str(self.specific_number)