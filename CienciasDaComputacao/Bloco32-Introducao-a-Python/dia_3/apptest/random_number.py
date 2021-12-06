import random


def try_random_number(input_number):
    number = random.randint(0, 3)
    compare = number
    print(compare)

    if (compare == input_number):
        return 'You Win!'
    return 'You Lose!'


print(try_random_number(1))
