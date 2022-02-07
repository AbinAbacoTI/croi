from django.db import models

from project.models.project import Project


class Bond(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="bond"
    )
    amount = models.IntegerField()
    quantity = models.IntegerField()
    rate_return = models.FloatField()
    specific_number = models.CharField(max_length=20)
    sale_price = models.FloatField()

    def __str__(self) -> str:
        return str(self.specific_number)
