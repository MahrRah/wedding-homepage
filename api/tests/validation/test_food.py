import pytest
from shared.validate import validate_food



@pytest.mark.parametrize("test_input", [("0"),("1"),("2"),("3")])
def test_valid_food_choice(test_input):
    result = validate_food(food=test_input)

    assert result == True

@pytest.mark.parametrize("test_input", [("-1"),("4"),("d"),("")])
def test_invalid_food_choice(test_input):
    result = validate_food(food=test_input)

    assert result == False