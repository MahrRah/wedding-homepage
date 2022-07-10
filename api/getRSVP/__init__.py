import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    rsvpCode = req.params.get('rsvpCode')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            rsvpCode = req_body.get('rsvpCode')

    if rsvpCode:
        return func.HttpResponse(f"Hello, {rsvpCode}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
