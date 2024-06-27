from django.shortcuts import render, redirect

# Create your views here.
def adms(request):
    return render(request, 'funcionarioLogin.html')

def funcionarioPrincipal_view(request):
    return render(request, 'funcionarioPrincipal.html')

def perfilFuncionario_view(request):
    return render(request, 'funcionarioPerfil.html')

def process_form(request):
    if request.method == 'POST':
        pass
    return redirect('funcionarioPerfil')