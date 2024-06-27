from django.shortcuts import render, redirect
from .models import DadosFuncionario
# Create your views here.
def adms(request):
    nova_pessoa = DadosFuncionario(nome_funcionario='Cleber', idade_funcionario=22, telefone_funcionario='81996549125')
    nova_pessoa.save()
    return render(request, 'funcionarioLogin.html')

def funcionarioPrincipal_view(request):
    return render(request, 'funcionarioPrincipal.html')

def perfilFuncionario_view(request):
    return render(request, 'funcionarioPerfil.html')

def process_form(request):
    if request.method == 'POST':
        pass
    return redirect('funcionarioPerfil')