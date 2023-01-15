import json
import logging
import re
from bson.json_util import dumps
from jsonmerge import merge
import os
from shared.validate import validate_email, validate_food, validate_phonenumber
from shared.templates import (
    guest_template,
    plusOne_template,
    child_template,
    hotel,
    guest_update_template,
)

import azure.functions as func


logger = logging.getLogger(__name__)

NOT_ATTENDING_TEMPLATE_ID ={"de":"d-4d5a6b3c3ee14dc6a2e42dafc6953efd","en":"d-4fd6266ed02e4ad2873049e379f53f15"}
ATTENDING_ALL_TEMPLATE_ID = {"de":"d-2662ea6dd2cb4ba09cbb6be40c3714de","en":"d-0edfeca99ff448c8ae014c7045a18d18"}
SINGLE_TEMPLATE_ID = {"de":"d-2dcf5ff09197401cb26026b52ac55ba4","en":"d-f81582ba83df411caf8452e895fbc04e"}
WITH_PLUSONE_TEMPLATE_ID = {"de":"d-244e10f9b3494ea6b32b16569d52ccaa","en":"d-271179590fc2474c882a87f0e2044693"}
WITH_CHILDREN_TEMPLATE_ID = {"de":"d-7e0b6ff2aafe4998a25dd84cbf95adf7","en":"d-83a6c53b46ef46b8849e099d16edbf78"}


hotel_booker_mail_text_yes= {"de":"","en":"do"}
hotel_booker_mail_text_no= {"de":" nicht","en":"do not"}


def get_database():
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    # CONNECTION_STRING = "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/myFirstDatabase"
    DATABASE_CONNECTION_STRING = os.environ["DATABASE_CONNECTION_STRING"]
    from pymongo import MongoClient

    client = MongoClient(DATABASE_CONNECTION_STRING)

    return client.weddingdb


db_client = get_database()


# TODO extract all new_* into a new file
def new_personal_data(rsvp, data):
    rsvp["food"] = data["food"] if validate_food(data["food"]) else "0"
    rsvp["attending"] = data["attending"]
    rsvp["email"] = data["email"] if validate_email(data["email"]) else ""
    rsvp["phone"] = data["phone"] if validate_phonenumber(data["phone"]) else ""
    rsvp["language"] = data["language"]
    rsvp["message"] = data["message"]

    return rsvp


def new_hotel_data(rsvp, data):
    rsvp["hotel"] = data["hotel"]  # TODO Validate
    return rsvp


def new_plus_one_data(rsvp, data):
    if len(rsvp["plusOne"]) != 0:

        rsvp["plusOne"][0]["firstname"] = (
            data["plusOne"][0]["firstname"]
            if "firstname" in data["plusOne"][0]
            else rsvp["plusOne"][0]["firstname"]
        )
        rsvp["plusOne"][0]["lastname"] = (
            data["plusOne"][0]["lastname"]
            if "lastname" in data["plusOne"][0]
            else rsvp["plusOne"][0]["lastname"]
        )
        rsvp["plusOne"][0]["food"] = (
            data["plusOne"][0]["food"]
            if "food" in data["plusOne"][0]
            else rsvp["plusOne"][0]["food"]
        )
        rsvp["plusOne"][0]["attending"] = data["plusOne"][0]["attending"]
    return rsvp


def new_children_data(rsvp, data):
    if len(rsvp["child"]) != 0:
        for i in range(len(rsvp["child"])):
            rsvp["child"][i]["firstname"] = data["child"][i]["firstname"]
            rsvp["child"][i]["lastname"] = data["child"][i]["lastname"]
            rsvp["child"][i]["age"] = data["child"][i]["age"]
            rsvp["child"][i]["attending"] = data["child"][i]["attending"]
    return rsvp


def update_rsvp_entery(rsvp, data):
    rsvp = new_personal_data(rsvp=rsvp, data=data)
    rsvp = new_hotel_data(rsvp=rsvp, data=data)
    rsvp = new_plus_one_data(rsvp=rsvp, data=data)
    rsvp = new_children_data(rsvp=rsvp, data=data)
    return rsvp


def get_rsvp(id):
    logger.info(id)
    value = db_client.guests.find_one({"rsvpCode": id})
    return value


def update_rsvp(id, data):
    rsvp = get_rsvp(id)

    updated_rsvp = update_rsvp_entery(rsvp=rsvp, data=data)
    result = db_client.guests.update_one({"rsvpCode": id}, {"$set": updated_rsvp})

    logger.info(f"{ id } got Updated to: {result}")
    return rsvp


def get_child_string(child_arr):
    child = []
    for ch in child_arr:
        name = ch["firstname"]
        age = ch["age"] if ch["age"] != "" else "-"
        child.append(f"{name} ({age})")

    return ", ".join(child)


def get_food_text(id, lg):
    if id == "0":
        return "Not selected" if lg == "en" else "Nicht ausgewählt"
    elif id == "1":
        return "No restrictions" if lg == "en" else "Keine einschränkungen"
    elif id == "2":
        return "Vegetarian" if lg == "en" else "Vegetarisch"
    elif id == "3":
        return "Glutenfree" if lg == "en" else "Glutenfrei"
    else:
        return "Could not be loaded" if lg == "en" else "Konnte nicht geladen werden"


def create_mail_message(data):
    body = {"to": [{"email": data["email"]}], "dynamic_template_data": {}}
    
    dynamic_template_data = {}
    if data["attending"] == "yes":
        personal = {
            "first_name": data["firstname"],
            "email": data["email"],
            "phone": data["phone"],
            "food": get_food_text(data["food"], data["language"]),
            "language": data["language"],
            "message": data["message"],
        }
        dynamic_template_data.update(personal)

    if "plusOne" in data and len(data["plusOne"]) !=0 and data["plusOne"][0]["attending"] == "yes":
        plus_one = {
            "po_name": " ".join(
                [
                    data["plusOne"][0]["firstname"],
                    data["plusOne"][0]["lastname"],
                ]
            ),
            "po_food": get_food_text(data["food"], data["language"]),
        }
        dynamic_template_data.update(plus_one)
    if "child" in data and len(data["child"]) !=0 and data["child"][0]["attending"] == "yes":
        child = {"children_list": get_child_string(data["child"])}
        dynamic_template_data.update(child)
    if "hotel" in data:
        hotel = {"h_booking": hotel_booker_mail_text_yes[data["language"]] if data["hotel"]["booking"] == "yes" else hotel_booker_mail_text_no[data["language"]]}
        dynamic_template_data.update(hotel)

    body["dynamic_template_data"] = dynamic_template_data
    return body


def get_template_id(data):
    if (data["attending"] == "yes"):
        if ("child" in data
            and len(data["child"]) !=0 
            and data["child"][0]["attending"] == "yes"
            and "plusOne" in data
            and len(data["plusOne"]) !=0 
            and data["plusOne"][0]["attending"] == "yes"
        ):
            return ATTENDING_ALL_TEMPLATE_ID[data["language"]]
        elif (
            "plusOne" in data
            and len(data["plusOne"]) !=0 
            and data["plusOne"][0]["attending"] == "yes"
        ):
            return WITH_PLUSONE_TEMPLATE_ID[data["language"]]
        elif (
            "child" in data
            and len(data["child"]) !=0 
            and data["child"][0]["attending"] == "yes"
        ):
            return WITH_CHILDREN_TEMPLATE_ID[data["language"]]
        else:

            return SINGLE_TEMPLATE_ID[data["language"]]
    else:
        return NOT_ATTENDING_TEMPLATE_ID[data["language"]]


def main(req: func.HttpRequest, sendGridMessage: func.Out[str]) -> func.HttpResponse:
    logger.info("Python HTTP trigger function processed a request.")
    resp = None
    try:
        rsvp_id = req.route_params.get("id")
    except ValueError:
        pass
    logger.info(req)
    if req.method == "GET":
        logger.info(f"Get RSVP of {rsvp_id}")
        resp = get_rsvp(rsvp_id)
        return func.HttpResponse(
            body=dumps(resp),
            headers={
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            status_code=200,
        )

    elif req.method == "POST":
        try:
            new_data = json.loads(req.get_body())
            logger.info(f"Update RSVP of {rsvp_id} with values {new_data}")
            new_data = update_rsvp(rsvp_id, new_data)
            personalizations = create_mail_message(new_data)

            logging.info(f"email new datat {new_data}")
            if new_data["email"]:
                logging.info(f"email new data2 {new_data}")
                message = {
                    "from": {"email": "thegrosjeans.2023@gmail.com"},
                    "personalizations": [personalizations],
                    "template_id": get_template_id(new_data),
                }

                sendGridMessage.set(json.dumps(message))
            return func.HttpResponse(
                headers={
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                status_code=200,
            )

        except Exception as ex:
            logger.error(f"Error {ex}")
            return func.HttpResponse(
                headers={
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                status_code=500,
            )
