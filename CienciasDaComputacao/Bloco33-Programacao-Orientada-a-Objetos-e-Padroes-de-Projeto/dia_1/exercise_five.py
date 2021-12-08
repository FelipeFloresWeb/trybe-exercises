# Exercício 5: Notou que os pilares da orientação a objetos começam a
# manifestar a medida que fizemos nossos exercícios de modelagem? Que tal
# agora então modelarmos uma televisão?

class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_de_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume += self.taxa_de_aumento_de_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada


# Para testar!

tv_da_sala = Televisao(42)
tv_da_sala.aumentar_volume()
print(tv_da_sala.volume)

tv_da_sala.diminuir_volume()
tv_da_sala.diminuir_volume()
print(tv_da_sala.volume)

tv_da_sala.modificar_canal(42)
print(tv_da_sala.canal)

tv_da_sala.ligar_ou_desligar()
print(tv_da_sala.ligada)
