import json
import logging

import azure.functions as func

sample = {
  "rsvpCode": "123",
  "name": "Valentin",
  "lastname": "Grosjean",
  "dinner":"3",
  "allowedBrunch":"false",
  "brunch": "true",
  "message":"sagjafshjal",
  "plusOne": [
    {
      "name": "valentin",
      "lastname": "grosjean",
      "food": ""
    }
  ],
  "children": [
    {
      "name": "valentin",
      "lastname": "grosjean",
      "food": "",
      "age":""
    },
        {
      "name": "valentin",
      "lastname": "grosjean",
      "food": "",
      "age":""
    },
        {
      "name": "valentin",
      "lastname": "grosjean",
      "food": "",
      "age":""
    }
    ]
}


sampleEdit = {
  "rsvpCode": "123",
  "name": "Valentin",
  "lastname": "Grosjean",
  "dinner":"3",
  "brunch": "true",
  "message":"sagjafshjal",
  "plusOne": [
    {
      "name": "valentin",
      "lastname": "grosjean",
      "food": ""
    }
  ],
  "children": [
    {
      "name": "valentin",
      "lastname": "grosjean",
      "food": "",
      "age":""
    },
        {
      "name": "valentin",
      "lastname": "grosjean",
      "food": "",
      "age":""
    },
        {
      "name": "valentin",
      "lastname": "grosjean",
      "food": "",
      "age":""
    }
    ]
}





def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        rsvp_id = req.route_params.get('id')
    except ValueError:
        pass
    logging.info(req)
    if req.method == "GET":
      logging.info('get')
    elif req.method == 'POST':
      logging.info('post')


    
    data = json.dumps(sample)
    logging.info(data)
    return func.HttpResponse(body=data, headers={"content-type": "application/json",
        "Access-Control-Allow-Origin": "*",}, status_code=200)



def updateRSVP(data){
    old_rsvp = getRSVP(data.id)
    
}