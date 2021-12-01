from is_even import is_even
from unittest.mock import patch
from mocks.random_number_mock import try_random_number_mock


def test_is_even_if_number_is_even_returns_true():
    assert is_even(2) is True


def test_is_even_if_number_is_even_returns_false():
    assert is_even(3) is False


def test_random_number_if_get_it_right_returns_message_you_win():
    with patch('random.randint', try_random_number_mock):
        assert try_random_number_mock(1) == 'You Win!'


def test_random_number_if_get_it_right_returns_message_you_lose():
    with patch('random.randint', try_random_number_mock):
        assert try_random_number_mock(2) == 'You Lose!'
