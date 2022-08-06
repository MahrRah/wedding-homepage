import csv
import uuid
import copy

guest_template = { "_id":"","rsvpCode":"","name":"","lastname":"","food":None, "plusOne":[], "child":[]} 
plusOne_template = {"name":"","lastname":"","food":None}       
child_template = {"name":"","lastname":"","food":None, "age":0}     

rsvp_codes = []
guest_list = []

with open('../data/guestlist.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    next(spamreader)
    i = 1
    for row in spamreader:
        guest = copy.deepcopy(guest_template)
        guest["_id"] = i
        guest["rsvpCode"] = str(uuid.uuid4())[:4] 
        guest["name"] = row[0].split(" ")[0]
        guest["lastname"] = row[0].split(" ")[1]

        if row[1]=="1":
            plusOne = copy.deepcopy(plusOne_template)
            plusOne["name"] = row[2].split(" ")[0] if row[2]!="" else "" 
            plusOne["lastname"] = row[2].split(" ")[1] if row[2]!="" else "" 
            guest["plusOne"].append(plusOne)

        for  i in range(int(row[3])):
             guest["child"].append(copy.deepcopy(child_template))
        guest_list.append(guest)
        i+=1

print(guest_list)

import json
with open('../data/guestDB.json', 'w') as f:
    json.dump(guest_list, f)


for guest in guest_list:
    rsvp_codes.append(guest["rsvpCode"])

with open('../data/rsvp_codes.txt', 'w') as f:
    f.write("\n".join(rsvp_codes))