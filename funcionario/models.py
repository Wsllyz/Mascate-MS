from django.db import models

class DadosFuncionario(models.Model):
    id_funcionario = models.AutoField(primary_key=True)
    nome_funcionario = models.TextField(max_length=255)
    idade_funcionario = models.IntegerField()
    telefone_funcionario = models.TextField(max_length=11)