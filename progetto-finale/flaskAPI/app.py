from flask import Flask 
from flask_cors import CORS , cross_origin
import os
import pymongo
import json

#import rec

from flask_pymongo import PyMongo


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

class prod_details: 
    def __init__(self, home_prod, site, born_year, num_games, val_home, country_home, fatt, founders,num_workers, coords, image_url): 
        self.home_prod = home_prod
        self.site = site
        self.born_year = born_year
        self.num_games = num_games
        self.val_home = val_home
        self.country_home = country_home
        self.fatt = fatt
        self.founders = founders
        self.num_workers = num_workers
        self.coords = coords
        self.image_url = image_url
        

class create_dict(dict): 
    def __init__(self): 
        self = dict() 
    def add(self, key, value): 
        self[key] = value 

#endpoint eleco case per il menu
@app.route('/', methods=['GET'])
def home():
    myclient = pymongo.MongoClient("mongodb://Loi:IIeee1mm@cluster0-shard-00-00.ujobt.mongodb.net:27017,cluster0-shard-00-01.ujobt.mongodb.net:27017,cluster0-shard-00-02.ujobt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qtdhit-shard-0&authSource=admin&retryWrites=true&w=majority")
    mydb = myclient["videogamesDB"]
    mycol = mydb["homeP"]
    
    list = [] 

    for curRow in mycol.find():
        list.append( prod_details(
        curRow['home_prod'], 
        curRow['site'],
        curRow['born_year'],
        curRow['num_games'],
        curRow['val_home'],
        curRow['country_home'],
        curRow['fatt'],
        curRow['founders'],
        curRow['num_workers'],
        curRow['coords'],
        curRow['image_url']
        ) )

    
    json_result = json.dumps(list, default = lambda x: x.__dict__);

    return(json_result) 

#endpoint dettaglio casa produttrice
@app.route('/Details/<name>', methods=['GET'])
def Details(name):
    
    myclient = pymongo.MongoClient("mongodb://Loi:IIeee1mm@cluster0-shard-00-00.ujobt.mongodb.net:27017,cluster0-shard-00-01.ujobt.mongodb.net:27017,cluster0-shard-00-02.ujobt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qtdhit-shard-0&authSource=admin&retryWrites=true&w=majority")
    mydb = myclient["videogamesDB"]
    mycol = mydb["homeP"]
    
    list = [] 

    for curRow in mycol.find({"home_prod":{"$regex":name}}):
        list.append( prod_details(
        curRow['home_prod'], 
        curRow['site'],
        curRow['born_year'],
        curRow['num_games'],
        curRow['val_home'],
        curRow['country_home'],
        curRow['fatt'],
        curRow['founders'],
        curRow['num_workers'],
        curRow['coords'],
        curRow['image_url']
        ) )

    
    json_result = json.dumps(list, default = lambda x: x.__dict__);

    return(json_result) 

app.run()




