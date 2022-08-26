import json
import os

def get_data():
    with open('../data/guestDB.json') as f:
        data = json.load(f)
    return data


def get_database():
    from pymongo import MongoClient

    CONNECTION_STRING = os.environ["DATABASE_CONNECTION_STRING"]
    client = MongoClient(CONNECTION_STRING)

    return client.weddingdb


def upload_data(collection,data):
    collection.insert_many(data)


db_client = get_database()
data = get_data()
upload_data(db_client.guests,data)
