from django.urls import path
from principal.views import reserva_view

urlpatterns = [
    path('reserva/', reserva_view, name='reserva')
]