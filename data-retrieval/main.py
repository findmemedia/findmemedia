from pymongo import MongoClient
from retrieval import get_page, get_media

import json
import os

client = MongoClient(f"mongodb+srv://Admin:{os.environ['MONGO_PWD']}@find-me-media-cluster.zw2beu5.mongodb.net/?retryWrites=true&w=majority")


for page in range(1, 501):
    for movie in get_page('movie', page)['results']:
        leading_actor = get_media('movie', movie['id'], 'credits')['cast'][0]
        client['find-me-media'].media.insert_one(leading_actor)