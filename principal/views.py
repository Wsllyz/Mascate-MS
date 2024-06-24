from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, 'home.html')

def reserva_view(request):
    return render(request, 'fazerReservaCliente.html')