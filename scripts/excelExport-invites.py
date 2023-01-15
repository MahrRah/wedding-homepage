import json

import csv


with open("../data/guestDB.json", newline="") as jsonfile:
    comosbd = json.load(jsonfile)

with open("../data/excelExportGuestsInvite.csv", "w") as csvfile:
    fieldnames = [
        "rsvpCode",
        "firstname",
        "lastname",
        "plusOne:firstname",
        "plusOne:lastname",
    ]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for line in comosbd:
        tt = {
            "rsvpCode": line["rsvpCode"],
            "firstname": line["firstname"],
            "lastname": line["lastname"],
            "plusOne:firstname": line["plusOne"][0]["firstname"] if len(line["plusOne"]) > 0  else "",
            "plusOne:lastname": line["plusOne"][0]["lastname"] if len(line["plusOne"]) > 0  else "",
            }
        print(tt)
        writer.writerow(tt)
