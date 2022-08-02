import json
import os
import requests

def get_media(media_type: str, id: str, prop: str):
    if prop == 'details':
        return requests.get(f"{os.environ['DATASET_URL']}/{media_type}/{id}?api_key={os.environ['API_KEY']}&language=en-US").json()
    return requests.get(f"{os.environ['DATASET_URL']}/{media_type}/{id}/{prop}?api_key={os.environ['API_KEY']}&language=en-US").json()

def get_page(media_type: str, page: int):
    return requests.get(f"{os.environ['DATASET_URL']}/{media_type}/popular?api_key={os.environ['API_KEY']}&language=en-US&page={page}").json()