from rest_framework import viewsets
from .serializers import TrashCanSerializer, DistrictSerializer
from .models import TrashCan, District
from rest_framework.decorators import action
from rest_framework.response import Response


class TrashCanView(viewsets.ModelViewSet):
    serializer_class = TrashCanSerializer
    queryset = TrashCan.objects.all()


class DistrictView(viewsets.ModelViewSet):
    serializer_class = DistrictSerializer
    queryset = District.objects.all()

    @action(detail=True, methods=['get'])
    def trashcans(self, request, pk=None):
        district = self.get_object()
        trash_cans = TrashCan.objects.filter(district=district)
        serializer = TrashCanSerializer(trash_cans, many=True)
        return Response(serializer.data)
