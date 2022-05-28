from flask import Flask , request, jsonify, Response,render_template, make_response
from flask_restful import Resource , Api ,reqparse
from flask_cors import CORS , cross_origin
from bson import json_util
import pandas as pd
import pymongo
import rec

from flask_pymongo import PyMongo

myclient = pymongo.MongoClient("mongodb://Loi:IIeee1mm@cluster0-shard-00-00.ujobt.mongodb.net:27017,cluster0-shard-00-01.ujobt.mongodb.net:27017,cluster0-shard-00-02.ujobt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qtdhit-shard-0&authSource=admin&retryWrites=true&w=majority")
mydb = myclient["videogamesDB"]
mycol = mydb["homeP"]