from pymongo import MongoClient
import os

client = MongoClient(f"mongodb+srv://Admin:{os.environ['MONGO_PWD']}@find-me-media-cluster.zw2beu5.mongodb.net/?retryWrites=true&w=majority")

client['find-me-media'].media.insert_one({'title' : '21'})