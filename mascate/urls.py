from django.contrib import admin
from django.urls import path, include

from principal.views import home
from funcionario.views import adms

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('adms/', include('funcionario.urls')),
    path('reserva/', include('principal.urls'))
]
