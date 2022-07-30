from pymongo import MongoClient
import os

client = MongoClient(f"mongodb+srv://Admin:{os.environ['MONGO_PWD']}@find-me-media-cluster.zw2beu5.mongodb.net/?retryWrites=true&w=majority")

m = client['find-me-media'].media.find_one({'title' : 'Fever Pitch'})