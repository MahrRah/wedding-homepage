import json
import logging
import json
import logging
import re
from bson.json_util import dumps
from jsonmerge import merge
import os
from shared.validate import validate_email
from shared.templates import (
    guest_template,
    plusOne_template,
    child_template,
    hotel,
    guest_update_template,
)

import azure.functions as func


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
    rsvp["food"] = data["food"]
    rsvp["attending"] = data["attending"]
    rsvp["email"] = data["email"]  # TODO Validate
    rsvp["phone"] = data["phone"]  # TODO Validate
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
            print(rsvp["child"])
            print(data["child"])
            rsvp["child"][i]["firstname"] = data["child"][i]["firstname"]
            rsvp["child"][i]["lastname"] = data["child"][i]["lastname"]
            rsvp["child"][i]["age"] = data["child"][i]["age"]
            rsvp["child"][i]["attending"] = data["child"][i]["attending"]
    return rsvp


def update_rsvp_entery(rsvp, data):
    rsvp = new_personal_data(rsvp=rsvp, data=data)
    rsvp = new_hotel_data(rsvp, data)
    rsvp = new_plus_one_data(rsvp, data)
    rsvp = new_children_data(rsvp, data)
    return rsvp


def get_rsvp(id):
    logging.info(id)
    value = db_client.guests.find_one({"rsvpCode": id})
    return value


def update_rsvp(id, data):
    rsvp = get_rsvp(id)

    updated_rsvp = update_rsvp_entery(rsvp=rsvp, data=data)
    result = db_client.guests.update_one({"rsvpCode": id}, {"$set": updated_rsvp})

    logging.info(f"{ id } got Updated to: {result}")
    return rsvp


def main(req: func.HttpRequest, sendGridMessage: func.Out[str]) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")
    resp = None
    try:
        rsvp_id = req.route_params.get("id")
    except ValueError:
        pass
    logging.info(req)
    if req.method == "GET":
        logging.info(f"Get RSVP of {rsvp_id}")
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
            logging.info(f"Update RSVP of {rsvp_id} with values {new_data}")
            new_data = update_rsvp(rsvp_id, new_data)
            if new_data["email"]:
                print(new_data)
                if len(new_data["plusOne"]) > 0:
                    message = {
                        "from": {"email": "thegrosjeans.2023@gmail.com"},
                        "personalizations": [
                            {
                                "to": [{"email": new_data["email"]}],
                                "dynamic_template_data": {
                                    "first_name": new_data["firstname"],
                                    "email": new_data["email"],
                                    "phone": new_data["phone"],
                                    "food": new_data["food"],
                                    "language": new_data["language"],
                                    "po_name": " ".join(
                                        [
                                            new_data["plusOne"][0]["firstname"],
                                            new_data["plusOne"][0]["lastname"],
                                        ]
                                    ),
                                    "po_food": new_data["food"],
                                    "h_booking": "do"
                                    if new_data["hotel"]["rooms"] != 0
                                    else "do not",
                                    "children_list": "child 1 (8), child 2 (12)",
                                    "message": new_data["message"],
                                },
                            }
                        ],
                        "template_id": "d-f92adcb1cfcc40049ff5e126a238dc85",
                    }

                sendGridMessage.set(json.dumps(message))
                sendGridMessage
            return func.HttpResponse(
                headers={
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                status_code=200,
            )

        except Exception as ex:
            logging.error(f"Error {ex}")
            return func.HttpResponse(
                headers={
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                status_code=500,
            )
