import pytest
from shared.validate import validate_phonenumber 



@pytest.mark.parametrize("test_input", [("0794345509"),("+41793435509"),("0041793435509")])
def test_valid_phonenumber(test_input):
    result = validate_phonenumber(number=test_input)

    assert result == True

@pytest.mark.parametrize("test_input", [("079434550"),("++41793435509"),("00041793435509")])
def test_valid_phonenumber(test_input):
    result = validate_phonenumber(number=test_input)

    assert result == False