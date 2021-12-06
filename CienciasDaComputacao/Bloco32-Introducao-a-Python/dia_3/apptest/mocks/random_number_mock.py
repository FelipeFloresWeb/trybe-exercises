import random


# https://stackoverflow.com/questions/39930244/how-to-mock-random-choice-in-python/39930639
def try_random_number_mock(inputnumber):
    random.seed(9002)
    number = random.randrange(0, 3)
    if(inputnumber == number):
        return 'You Win!'
    return 'You Lose!'
