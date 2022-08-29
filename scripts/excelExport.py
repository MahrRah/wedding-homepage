import json

import csv


with open("../data/guestDB.json", newline="") as jsonfile:
    comosbd = json.load(jsonfile)

with open("../data/excelExportGuests.csv", "w") as csvfile:
    fieldnames = ["rsvpCode", "hotel", "rooms", "guests", "nights"]

with open("../data/excelExportGuests.csv", "w") as csvfile:
    fieldnames = [
        "rsvpCode",
        "firstname",
        "lastname",
        "email",
        "phone",
        "attending",
        "food",
        "language",
        "plusOne" "child",
        "age"
        # "po:attending",
        # "po:firstname",
        # "po:lastname",
        # "po:food",
        # "ch1:firstname",
        # "ch1:lastname",
        # "ch1:age",
        # "ch2:firstname",
        # "ch2:lastname",
        # "ch2:age",
        # "ch3:firstname",
        # "ch3:lastname",
        # "ch3:age",
        # "h:rooms",
        # "h:guests",
        # "h:nights",
    ]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for line in comosbd:
        tt = {
            "rsvpCode": line["rsvpCode"],
            "firstname": line["firstname"],
            "lastname": line["lastname"],
            "email": line["email"],
            "phone": line["phone"],
            "attending": line["attending"],
            "food": line["food"],
            "language": line["language"],
            "po:attending": line["plusOne"][0]["attending"]
            if len(line["plusOne"]) > 0
            else "",
            "po:firstname": line["plusOne"][0]["firstname"]
            if len(line["plusOne"]) > 0
            else "",
            "po:lastname": line["plusOne"][0]["lastname"]
            if len(line["plusOne"]) > 0
            else "",
            "po:food": line["plusOne"][0]["food"] if len(line["plusOne"]) > 0 else "",
            "ch1:firstname": line["child"][0]["firstname"]
            if len(line["child"]) > 0
            else "",
            "ch1:lastname": line["child"][0]["lastname"]
            if len(line["child"]) > 0
            else "",
            "ch1:age": line["child"][0]["age"] if len(line["child"]) > 0 else "",
            "ch2:firstname": line["child"][1]["firstname"]
            if len(line["child"]) > 1
            else "",
            "ch2:lastname": line["child"][1]["lastname"]
            if len(line["child"]) > 1
            else "",
            "ch2:age": line["child"][1]["age"] if len(line["child"]) > 1 else "",
            "ch3:firstname": line["child"][2]["firstname"]
            if len(line["child"]) > 2
            else "",
            "ch3:lastname": line["child"][2]["lastname"]
            if len(line["child"]) > 2
            else "",
            "ch3:age": line["child"][2]["age"] if len(line["child"]) > 2 else "",
            "h:rooms": line["hotel"]["rooms"],
            "h:guests": line["hotel"]["guests"],
            "h:nights": line["hotel"]["nights"],
        }
        print(tt)
        writer.writerow(tt)
