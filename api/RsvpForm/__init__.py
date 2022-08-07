import json
import logging
import json
import logging
from bson.json_util import dumps
from jsonmerge import merge
import os

import azure.functions as func

def get_database():
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    # CONNECTION_STRING = "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/myFirstDatabase"
    DATABASE_CONNECTION_STRING = os.environ["DATABASE_CONNECTION_STRING"]
    from pymongo import MongoClient
    client = MongoClient(DATABASE_CONNECTION_STRING)

    return client.weddingdb

db_client = get_database()

def get_rsvp(id):
    value = db_client.guest.find_one({"rsvpCode":id})
    return value

def update_rsvp(id, data):
    old_rsvp = get_rsvp(id)
    result = merge(old_rsvp, data)
    logging.info(f'Updating with new value: {result}')
    # tt = db_client.guest.update_one({"rsvpCode":id}, {'$set':result})
    # logging.info(f'Usdfsdf: {tt}')




def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    resp=None
    try:
        rsvp_id = req.route_params.get('id')
    except ValueError:
        pass
    logging.info(req)
    if req.method == "GET":
      logging.info(f'Get RSVP of {rsvp_id}')
      resp = get_rsvp(rsvp_id)
    elif req.method == 'POST':
        try:
            new_data = json.loads(req.get_body())
            logging.info(f'Update RSVP of {rsvp_id} with values {new_data}')
            update_rsvp(rsvp_id, new_data)
        except Exception as ex:
            logging.error(ex)
           
    
    return func.HttpResponse(body=dumps(resp), headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)

