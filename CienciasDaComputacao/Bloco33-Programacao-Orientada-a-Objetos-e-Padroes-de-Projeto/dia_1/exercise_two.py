# Exercício 2: Para exercitar nossa capacidade de abstração,
# vamos modelar algumas partes de um software de geometria.
# Como poderíamos modelar um objeto retângulo?

class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2


# Para testar!
retangulo1 = Retangulo(5, 8)
print(retangulo1.calcular_area())
print(retangulo1.calcular_perimetro())
