from unittest import TestCase
from shared.validate import validate_food,validate_email,validate_child_age,validate_phonenumber 

class EmailTest(TestCase):
    def test_valid_email(self):
        email_1 = "tra.ra@gmail.com"
        email_2 = "trara@s.dub"
        result_1 = validate_email(email=email_1)
        result_2 = validate_email(email=email_2)
        self.assertTrue(result_1)
        self.assertTrue(result_2)

    def test_invalid_email(self):
        email_1 = "@gmail.com"
        email_2 = "trara@s."
        result_1 = validate_email(email=email_1)
        result_2 = validate_email(email=email_2)
        self.assertFalse(result_1)
        self.assertFalse(result_2)

class PhoneTest(TestCase):
    def test_valid_phonenumber(self):
        number_1 = "0794345509"
        number_2 = "+41793435509"
        result_1 = validate_phonenumber(number=number_1)
        result_2 = validate_phonenumber(number=number_2)
        self.assertTrue(result_1)
        self.assertTrue(result_2)

    def test_invalid_phonenumber(self):
        number_1 = "079434550"
        number_2 = "++41793435509"
        result_1 = validate_phonenumber(number=number_1)
        result_2 = validate_phonenumber(number=number_2)
        self.assertFalse(result_1)
        self.assertFalse(result_2)

