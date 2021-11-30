""" Agora a prática
Vamos colocar tudo o que vimos até agora em prática. Em todos os exercícios, crie funções para solucionar os problemas. Tenho certeza que vocês já viram isso. 😆 """
# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def biggerNum(a, b):
  if (a > b): return a
  if (b > a): return b

print(biggerNum(2, 3))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
li = [5, 10, 5, 5]
def arithmeticAverage(list):
# numpy.mean(li)
  return sum(list) / len(list)

print(arithmeticAverage(li))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

""" n = 5

*****
*****
*****
*****
*****
🦜 Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta em blablabla . Isso se aplica a listas também, caso você precise.
Sentiu aí um certo dejavu? 😁
 """

def printStars(number):
  count = 0

  while count < number:
    print(number * '*')
    count += 1

printStars(3)
# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.
def greaterNumber(list):
  greater = ''
  for name in list:
    if (len(greater) < len(name)): greater = name

  return greater

listName = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(greaterNumber(listName))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
""" 🦜 Dica:

  Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
  Triângulo Equilátero: três lados iguais;
  Triângulo Isósceles: quaisquer dois lados iguais;
  Triângulo Escaleno: três lados diferentes.
 """