from django.contrib import admin
from .models import TrashCan, District


@admin.register(TrashCan)
class PostAdmin(admin.ModelAdmin):
    list_display = ['address', 'district', 'is_full', 'fullness_weight', 'updated']


@admin.register(District)
class PostAdmin(admin.ModelAdmin):
    list_display = ['name']
