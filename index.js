const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var mongoDB = require('mongodb').MongoClient;
var db = require('./db')(mongoDB);

db.then(mongoConnect =>{
   app.use(cors());
   app.use(bodyParser.json({type: 'application/json'}));

   
   require('./routes/routes')(app, mongoConnect);

   
});

