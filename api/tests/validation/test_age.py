import pytest
from shared.validate import validate_child_age

@pytest.mark.parametrize("test_input", [("5"), ("1"), ("12"),("17")])
def test_valid_age_choice(test_input):
    result = validate_child_age(age_str=test_input)

    assert result == True

    
@pytest.mark.parametrize("test_input", [("-1"), (""), ("st"),("20")])
def test_invalid_age_choice(test_input):
    result = validate_child_age(age_str=test_input)

    assert result == False
