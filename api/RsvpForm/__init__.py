import json
import logging
import json
import logging
import os
from bson.json_util import dumps
from jsonmerge import merge

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        rsvp_id = req.route_params.get('id')
    except ValueError:
        pass
    logging.info(req)
    if req.method == "GET":
      logging.info(f'Get RSVP of {rsvp_id}')
      resp = getRSVP(rsvp_id)
    elif req.method == 'POST':
        try:
            new_data = req.get_body()
            logging.info(f'Update RSVP of {rsvp_id} with values {new_data}')
            resp = updateRSVP(rsvp_id, new_data)
        except:
            print("")
    
    # logging.info(resp)
    return func.HttpResponse(body=dumps(resp), headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)


def getRSVP(id):
    db_client = get_database()
    value = db_client.guest.find_one({"rsvpCode":id})
    return value

def updateRSVP(id, data):
    old_rsvp = getRSVP(id)
    logging.info(f'updaing {data} and {old_rsvp}')
    result = merge(old_rsvp, data)
    logging.info(f'updaing {result}')
    # old_rsvp.update(data)

def get_database():
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    # CONNECTION_STRING = "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/myFirstDatabase"

    from pymongo import MongoClient
    client = MongoClient()

    return client.weddingdb
