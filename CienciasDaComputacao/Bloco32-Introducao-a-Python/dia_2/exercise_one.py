"""Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical
em escada invertida. Exemplo: """
# Entrada:

# PEDRO


# Saída:

# PEDRO
# PEDR
# PED
# PE
# P

def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()

if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)