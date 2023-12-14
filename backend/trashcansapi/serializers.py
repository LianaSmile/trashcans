from rest_framework import serializers
from .models import TrashCan, District


class TrashCanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrashCan
        fields = ('id', 'address', 'district', 'is_full', 'fullness_weight', 'updated')


class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = ('id', 'name')
