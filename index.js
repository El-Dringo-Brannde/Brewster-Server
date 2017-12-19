const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var mongo = require('mongodb');
var db = require('./database/db')(mongo);
var beerRoutes = require('./routes/beer');
var userRoutes = require('./routes/user');

db.then(mongoConnect => {
   app.use(cors());
   app.use(bodyParser.json({
      type: 'application/json',
      limit: '3mb'
   }));

   app.use('/beer', beerRoutes(mongoConnect));
   app.use('/user', userRoutes(mongoConnect));
   // ^^^ Init routes

   app.listen(3105, () => console.log('Server running on port 3105!')); // start server
});