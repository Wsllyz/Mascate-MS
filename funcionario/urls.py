from django.urls import path
from funcionario.views import funcionarioPrincipal_view, adms, perfilFuncionario_view, process_form
urlpatterns = [
    path('', adms, name='adms'), #Tela incial de login do funcionario
    path('form/', process_form, name='process_form'), # Função de processamento e redirecionamento dos dados do formulário 
    path('perfil/', perfilFuncionario_view, name='funcionarioPerfil'),
    path('principal/', funcionarioPrincipal_view, name='funcionarioPrincipal'),
]