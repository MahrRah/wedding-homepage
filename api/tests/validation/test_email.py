import pytest
from shared.validate import validate_email


@pytest.mark.parametrize("test_input", [("trara@s.dub"), ("tra.ra@gmail.com")])
def test_valid_email(test_input):
    result = validate_email(email=test_input)

    assert result == True

@pytest.mark.parametrize("test_input", [("@gmail.com"), ("trara@s.")])
def test_valid_email(test_input):
    result = validate_email(email=test_input)

    assert result == False