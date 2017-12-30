var user = require('./../logic/user');
var mongoID = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();


// All routes here are after the '/user' route
module.exports = function(mongo) {
   user = new user(mongo, mongoID);
   router.use((req, res, next) => next()); // init

   router.post('/', (req, res) => {
      user.addUser(req.body, res);
   });

   router.get('/', (req, res) => {
      user.read({}, res);
   });

   router.put('/', (req, res) => {
      user.read(req.body, res);
   });


   return router;
};