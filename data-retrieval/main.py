from pymongo import MongoClient
from retrieval import get_page, get_media

import json
import os

client = MongoClient(f"mongodb+srv://Admin:{os.environ['MONGO_PWD']}@find-me-media-cluster.zw2beu5.mongodb.net/?retryWrites=true&w=majority")
doc = 0

for page in range(1, 501):
    for movie in get_page('movie', page)['results']:
        if client['find-me-media']['media'].count_documents({ 'details.title': movie['title'] }) == 0:
            doc += 1
            print(f"inserted {doc} documents")
            client['find-me-media']['media'].insert_one({
                'details': get_media('movie', movie['id'], 'details'),
                'credits': get_media('movie', movie['id'], 'credits'),
                'keywords': get_media('movie', movie['id'], 'keywords')
            })
