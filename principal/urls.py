from django.urls import path
from principal.views import reserva_view

urlpatterns = [
    path('', reserva_view, name='reserva')
]