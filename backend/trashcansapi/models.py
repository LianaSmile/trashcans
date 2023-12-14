from django.db import models


class District(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class TrashCan(models.Model):
    address = models.CharField(max_length=255)
    district = models.ForeignKey(District, related_name='trash_cans', on_delete=models.DO_NOTHING)
    is_full = models.BooleanField(default=False)
    fullness_weight = models.DecimalField(max_digits=5, decimal_places=2)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Trash Can ({self.address}, {self.district}): {"Full" if self.is_full else "Empty"}'

