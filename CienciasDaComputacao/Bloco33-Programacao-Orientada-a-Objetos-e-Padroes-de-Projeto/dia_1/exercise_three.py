# Exercício 3: E como poderíamos definir um círculo? Qual seu nome,
# atributos e comportamentos?

class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.raio * self.raio * self.PI

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


# Para testar!
circulo_1 = Circulo(5)
print(circulo_1.calcular_area())
print(circulo_1.calcular_perimetro())
