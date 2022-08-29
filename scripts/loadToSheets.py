from __future__ import print_function
import csv

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


def update_values(spreadsheet_id, sheet_id,range_name, value_input_option, _values):
    """
    Creates the batch_update the user has access to.
    Load pre-authorized user credentials from the environment.
    TODO(developer) - See https://developers.google.com/identity
    for guides on implementing OAuth2 for the application.
    """
    creds, _ = google.auth.default()
    # pylint: disable=maybe-no-member
    try:

        service = build("sheets", "v4", credentials=creds)
        values = _values
        body = {"values": values}
        result = (
            service.spreadsheets()
            .values()
            .update(
                spreadsheetId=spreadsheet_id,
                range=range_name,
                valueInputOption=value_input_option,
                body=body,
            )
            .execute()
        )
        print(f"{result.get('updatedCells')} cells updated.")
        return result
    except HttpError as error:
        print(f"An error occurred: {error}")
        return error


if __name__ == "__main__":
    with open("../data/excelExportGuests.csv", newline="") as fg:
        reader_guests = csv.reader(fg)
        data_guests = list(reader_guests)
    print(data_guests)
    # Pass: spreadsheet_id,  range_name, value_input_option and  _values
    update_values(
        "1o31QItnO8joV5JNEVbmqcbhqEUgDjqEhzr7fXb8BVcU","1208178651", "guests_db!A1:X120", "USER_ENTERED", data_guests
    )

    with open("../data/excelExportHotel.csv", newline="") as fh:
        reader_hotel = csv.reader(fh)
        data_hotel = list(reader_hotel)
    print(data_hotel)
    # Pass: spreadsheet_id,  range_name, value_input_option and  _values
    update_values(
        "1o31QItnO8joV5JNEVbmqcbhqEUgDjqEhzr7fXb8BVcU","1596043312" ,"hotel_db!A1:X49", "USER_ENTERED", data_hotel
    )