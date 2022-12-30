import csv
import uuid
import copy

guest_template = {
    "_id": "",
    "rsvpCode": "",
    "firstname": "",
    "lastname": "",
    "attending": "",
    "food": None,
    "email": "",
    "phone": "",
    "language": "",
    "hotel": {},
    "plusOne": [],
    "child": [],
    "message": "",
}
plusOne_template = {
    "firstname": "",
    "lastname": "",
    "food": None,
    "attending": "",
    "invited": "",
}
child_template = {
    "firstname": "",
    "lastname": "",
    "food": None,
    "age": 0,
    "attending": "",
}
hotel = {"rooms": "", "guests": "", "nights": "", "booking": ""}

rsvp_codes = []
guest_list = []

with open("../data/guestlist.csv", newline="") as csvfile:
    spamreader = csv.reader(csvfile, delimiter=",", quotechar="|")
    next(spamreader)
    for row in spamreader:
        guest = copy.deepcopy(guest_template)
        guest["_id"] = str(uuid.uuid4())
        guest["rsvpCode"] = str(uuid.uuid4())[:4]
        guest["firstname"] = row[0].split(" ")[0]
        guest["lastname"] = row[0].split(" ")[1]
        guest["hotel"] = copy.deepcopy(hotel)
        if row[1] == "1":
            plusOne = copy.deepcopy(plusOne_template)
            plusOne["firstname"] = row[2].split(" ")[0] if row[2] != "" else ""
            plusOne["lastname"] = row[2].split(" ")[1] if row[2] != "" else ""
            guest["plusOne"].append(plusOne)

        for i in range(int(row[3])):
            guest["child"].append(copy.deepcopy(child_template))
        guest_list.append(guest)

print(guest_list)

import json

with open("../data/guestDBtest.json", "w") as f:
    json.dump(guest_list, f)


for guest in guest_list:
    rsvp_codes.append(guest["rsvpCode"])

# with open("../data/rsvp_codes.txt", "w") as f:
#     f.write("\n".join(rsvp_codes))
