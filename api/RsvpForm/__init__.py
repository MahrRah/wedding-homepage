import json
import logging
import json
import logging
import os

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

    
    # logging.info(resp)
    return func.HttpResponse(body=json.dumps(resp), headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)


def getRSVP(id):
    f = open('RsvpForm/data.json')
    data =json.load(f)
    return [t for t in data if t['rsvpCode'] == id ][0]

def updateRSVP(id, data):
    old_rsvp = getRSVP(id)
    old_rsvp.update(data)
    
