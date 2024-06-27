from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Reserva

# Create your views here.
def home(request):
    return render(request, 'home.html')

def reserva_view(request):
    return render(request, 'fazerReservaCliente.html')

def reserva_process(request):
    if request.method == 'POST':
        nome_cliente = request.POST['nome']
        telefone_cliente = request.POST['telefone']
        email_cliente = request.POST['email']
        data = request.POST['data']
        hora = request.POST['horario']
        numero_pessoas = request.POST['pessoas']
        ocasiao_especial = request.POST['ocasiao']
        comentarios = request.POST['comentarios']

        novaReserva = Reserva(
           nome_cliente = nome_cliente,
           telefone_cliente = telefone_cliente,
           email_cliente = email_cliente,
           data = data,
           hora = hora,
           numero_pessoas = numero_pessoas,
           ocasiao_especial = ocasiao_especial,
           comentarios = comentarios
        )
        novaReserva.save()
    return redirect('confirmacao_view')

def confirmacao_view(request):
    nome = "Weslley"
    data = "2024-06-18"
    hora = "12:00"
    pessoas = 4
    email = "westvsantana@gmail.com"

    context = {
        'nome': nome,
        'data':data,
        'hora':hora,
        'pessoas':pessoas,
        'email':email
    }
    return render(request, 'confirmacao.html', context)