import json
import logging
import json
import logging
from bson.json_util import dumps
from jsonmerge import merge
import os

import azure.functions as func


guest_template = { "_id":"","rsvpCode":"","name":"","lastname":"","attending":"","food":None, "plusOne":[], "child":[]} 
plusOne_template = {"name":"","lastname":"","food":None}       
child_template = {"name":"","lastname":"","food":None, "age":0}     


guest_update_template = {
"attending":"",
"food":None, "plusOne":[], "child":[]
}
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
    rsvp = get_rsvp(id)
    rsvp['food'] = data['food']
    # old_rsvp['attending'] = data['attending']


    if len(rsvp['plusOne']) != 0:

        # old_rsvp['plusOne'][0]['attending'] = data['plusOne']['attending'] 
        rsvp['plusOne'][0]['name'] = data['plusOne'][0]['name'] if  'name' in data['plusOne'][0] else rsvp['plusOne'][0]['name']
        rsvp['plusOne'][0]['lastname'] = data['plusOne'][0]['lastname'] if  'lastname' in data['plusOne'][0] else rsvp['plusOne'][0]['lastname']
        rsvp['plusOne'][0]['food'] = data['plusOne'][0]['food'] if  'food' in data['plusOne'][0] else rsvp['plusOne'][0]['food']


    # check child lenths array
    # check plus one number
 
    result = db_client.guest.update_one({"rsvpCode":id}, {'$set':rsvp})
   
    logging.info(f'{ id } got Updated to: {result}')




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
      return func.HttpResponse(body=dumps(resp), headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)

    elif req.method == 'POST':
        try:
            new_data = json.loads(req.get_body())
            logging.info(f'Update RSVP of {rsvp_id} with values {new_data}')
            update_rsvp(rsvp_id, new_data)
            return func.HttpResponse(headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)

        except Exception as ex:
            logging.error(f'Error {ex}')
            return func.HttpResponse(headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=500)

           
    
    
