from flask import Flask , request, jsonify, Response,render_template, make_response, redirect
from flask_restful import Resource , Api ,reqparse
from flask_cors import CORS , cross_origin
from bson import json_util
import os
import pandas as pd
import pymongo
import json
#import rec

from flask_pymongo import PyMongo

myclient = pymongo.MongoClient("mongodb://Loi:IIeee1mm@cluster0-shard-00-00.ujobt.mongodb.net:27017,cluster0-shard-00-01.ujobt.mongodb.net:27017,cluster0-shard-00-02.ujobt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qtdhit-shard-0&authSource=admin&retryWrites=true&w=majority")
mydb = myclient["videogamesDB"]
mycol = mydb["homeP"]
print(mycol)

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])


def home():
    myclient = pymongo.MongoClient("mongodb://Loi:IIeee1mm@cluster0-shard-00-00.ujobt.mongodb.net:27017,cluster0-shard-00-01.ujobt.mongodb.net:27017,cluster0-shard-00-02.ujobt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qtdhit-shard-0&authSource=admin&retryWrites=true&w=majority")
    mydb = myclient["videogamesDB"]
    mycol = mydb["homeP"]
    
    class create_dict(dict): 
        # __init__ function 
        def __init__(self): 
            self = dict() 
        # Function to add key:value 
        def add(self, key, value): 
            self[key] = value 


    mydict = create_dict()
    
    for curRow in mycol.find():
        mydict.add(curRow['home_prod'], ({ "site":curRow['site'], 
                         "born_year":curRow['born_year'],
                         "num_games":curRow['num_games'],
                         "val_home":curRow['val_home'],
                         "country_home":curRow['country_home'],
                         "fatt":curRow['fatt'],
                         "founders":curRow['founders'],
                         "num_workers":curRow['num_workers'],
                         "coords":curRow['coords'],
                         "image_url":curRow['image_url']
                        }))
        

    stud_json = json.dumps(mydict, indent=2, sort_keys=True)

    return(stud_json) 


app.run()




