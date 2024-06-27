from django.db import models

class Reserva(models.Model):
    id_reserva = models.AutoField(primary_key=True)
    nome_cliente = models.TextField(max_length=255)
    telefone_cliente = models.TextField(max_length=11)
    email_cliente = models.TextField(max_length=150)
    data = models.DateField()
    hora = models.TimeField()
    numero_pessoas = models.IntegerField()
    ocasiao_especial = models.BooleanField()
    comentarios = models.TextField(max_length=1000)

