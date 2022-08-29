import json

import csv
import os
import json

def get_database_data():
    from pymongo import MongoClient

    CONNECTION_STRING = os.environ["DATABASE_CONNECTION_STRING"]
    client = MongoClient(CONNECTION_STRING)

    collection = client.weddingdb.guests
    cursor = collection.find({})

    with open('../data/DBexport.json', 'w') as file:
        file.write('[')
        for document in cursor:
            file.write(json.dumps(document))
            file.write(',')
        file.write(']')

get_database_data()
with open("../data/guestDB.json", newline="") as jsonfile:
    comosbd = json.load(jsonfile)

with open("../data/excelExportHotel.csv", "w") as csvfileHotel:
    fieldnamesHotel = ["rsvpCode", "hotel", "rooms", "guests", "nights"]
    writerHotel = csv.DictWriter(csvfileHotel, fieldnames=fieldnamesHotel)
    writerHotel.writeheader()
    for line in comosbd:
        hotel = {
            "rsvpCode": line["rsvpCode"],
            "hotel":line["hotel"]["booking"],
            "rooms": line["hotel"]["rooms"],
            "guests": line["hotel"]["guests"],
            "nights": line["hotel"]["nights"],
        }
        print(hotel)
        writerHotel.writerow(hotel)

with open("../data/excelExportGuests.csv", "w") as csvfileGuests:
    fieldnamesGuests = [
        "rsvpCode",
        "firstname",
        "lastname",
        "email",
        "phone",
        "attending",
        "food",
        "language",
        "plusOne",
        "child",
        "age",
    ]
    writerGuests = csv.DictWriter(csvfileGuests, fieldnames=fieldnamesGuests)

    writerGuests.writeheader()
    for line in comosbd:
        person = {
            "rsvpCode": line["rsvpCode"],
            "firstname": line["firstname"],
            "lastname": line["lastname"],
            "email": line["email"],
            "phone": line["phone"],
            "attending": line["attending"],
            "food": line["food"],
            "language": line["language"],
            "plusOne": "0",
            "child": "0",
            "age": "",
        }
        print(person)
        writerGuests.writerow(person)
        if len(line["plusOne"]) > 0:
            pluOne = {
                "rsvpCode": line["rsvpCode"],
                "firstname": line["plusOne"][0]["firstname"],
                "lastname": line["plusOne"][0]["lastname"],
                "email": "",
                "phone": "",
                "attending": line["plusOne"][0]["attending"],
                "food": line["plusOne"][0]["food"],
                "language": line["language"],
                "plusOne": "1",
                "child": "0",
                "age": "",
            }
            print(pluOne)
            writerGuests.writerow(pluOne)
        if len(line["child"]) > 0:
            for child in line["child"]:
                child = {
                    "rsvpCode": line["rsvpCode"],
                    "firstname": child["firstname"],
                    "lastname": child["lastname"],
                    "email": "",
                    "phone": "",
                    "attending": child["attending"],
                    "food": child["food"],
                    "language": line["language"],
                    "plusOne": "0",
                    "child": "1",
                    "age": child["age"],
                }
                print(child)
                writerGuests.writerow(child)
