from django.shortcuts import render

# Create your views here.
def adms(request):
    return render(request, 'funcionarioLogin.html')