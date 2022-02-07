from django.db import models

from order.models.order import Order
from project.models.loans import Loans

# Create your models here.

class MyLoans(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="my_loans"
    )
    loans = models.ForeignKey(
        Loans,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="my_loans"
    )
    created_at = models.DateTimeField()
    voucher = models.ImageField(upload_to="image", null=True, blank=True)
