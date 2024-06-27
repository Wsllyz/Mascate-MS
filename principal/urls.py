from django.urls import path
from principal.views import reserva_view, reserva_process, confirmacao_view

urlpatterns = [
    path('', reserva_view, name='reserva'),
    path('reserva_process/', reserva_process, name='reserva_process'),
    path('confirmacao/', confirmacao_view, name='confirmacao_view')
]