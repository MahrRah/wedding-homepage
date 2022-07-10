import json
import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        rsvp_id = req.route_params.get('id')
    except ValueError:
        pass

    
    data = json.dumps({"rsvpCode": rsvp_id,"name": "valentin","lastname": "grosjean","hasPlusOne": True,"hasChildren": False,"childrenNumber": 3})
    logging.info(data)
    return func.HttpResponse(body=data, headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)
