const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var mongo = require('mongodb');
var db = require('./db')(mongo);

db.then(mongoConnect =>{
   app.use(cors());
   app.use(bodyParser.json({
      type: 'application/json',
      limit: '3mb'
   }));

   
   require('./routes/routes')(app, mongoConnect);

   
});

