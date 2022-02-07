from django.db import models

from order.models.order import Order
from project.models.bond import Bond

# Create your models here.

class MyBond(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="my_bond"
    )
    bond = models.ForeignKey(
        Bond,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="my_bond"
    )
    created_at = models.DateTimeField()
    voucher = models.ImageField(upload_to="image", null=True, blank=True)
