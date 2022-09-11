from pickle import FALSE
import re

regexPhone = '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
regexEmail ="^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^-]+(?:\\.[a-zA-Z0-9_!#$%&’*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"


def validate_email(email: str):
    if re.match(regexEmail,email):
        return True
    return False

def validate_phonenumber(number: str):
    if re.match(regexPhone,number):
        return True
    return False

def validate_child_age(age: str):
    if age < 18 and age >0:
        return True
    return False

def validate_food(food: str):
    if food in [0,1,2,3]:
        return True
    return False