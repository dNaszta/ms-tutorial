#!/usr/bin/env python
import os
import urllib.request
import redis
import json
from http import HTTPStatus


class Receiver(object):
    collection_url: str
    redis_host: str
    redis_port: int
    redis_sub_connection: redis.client
    redis_cache_connection: redis.client
    redis_ps_channel: str
    all_data = []
    redis_sub: any

    def __init__(self):
        self.collection_url = os.getenv("COLLECTION_URI", "http://localhost:3000/product")
        self.redis_host = os.getenv("REDIS_HOST", "localhost")
        self.redis_port = os.getenv("REDIS_PORT", 6379)
        self.redis_ps_channel = os.getenv("REDIS_PS_CHANNEL", 'product_pubsub')
        self.redis_cache_name = os.getenv("REDIS_CACHE_NAME", 'product')
        self.redis_cache_connection = redis.Redis(host=self.redis_host, port=self.redis_port, db=0)
        self.redis_sub_connection = redis.Redis(host=self.redis_host, port=self.redis_port, db=1)

    def insert_product_data_to_cache(self):
        self.collect_products()
        self.insert_collection_to_redis()

    def collect_products(self):
        req = urllib.request.Request(url=self.collection_url, method='GET')
        with urllib.request.urlopen(req) as res:
            if res.status == HTTPStatus.OK:
                data_string = res.read().decode('utf-8')
                self.all_data = json.loads(data_string)

    def insert_collection_to_redis(self):
        for data in self.all_data:
            self.redis_cache_connection.set(self.redis_cache_name + '#' + str(data['id']), json.dumps(data))

    def subscribe(self):
        self.redis_sub = self.redis_sub_connection.pubsub()
        self.redis_sub.subscribe(self.redis_ps_channel)
        print("Listen to %s channel" % self.redis_ps_channel)
        for raw_message in self.redis_sub.listen():
            if raw_message["type"] != "message":
                continue
            message = json.loads(raw_message["data"])
            self.redis_cache_connection.set(self.redis_cache_name + '#' + str(message['id']), json.dumps(message))


receiver = Receiver()
receiver.insert_product_data_to_cache()
receiver.subscribe()
