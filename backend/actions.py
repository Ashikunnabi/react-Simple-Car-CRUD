import pymongo
from db import DB


database = DB().connect()
# connect to database
db = database.test
# connect to collection
collection = db.test

# a = {'name': 'Tuhin', 'status': 'Software Engineer'}
# x = collection.insert_one(a)
# print(x)

for x in collection.find({'status': None}):
    print(x)



















