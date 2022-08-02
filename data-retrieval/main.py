from pymongo import MongoClient
from retrieval import get_page, get_media

import json
import os

client = MongoClient(f"mongodb+srv://Admin:{os.environ['MONGO_PWD']}@find-me-media-cluster.zw2beu5.mongodb.net/?retryWrites=true&w=majority")


for page in range(1, 501):
    for movie in get_page('movie', page)['results']:
        client['find-me-media'].test.insert_one({
            'details': get_media('movie', movie['id'], 'details'),
            'credits': get_media('movie', movie['id'], 'credits'),
            'keywords': get_media('movie', movie['id'], 'keywords'),
            'providers': get_media('movie', movie['id'], 'watch/providers')
        })