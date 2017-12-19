var beer = require('./../logic/beer');
var mongoID = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();


// All routes here are after the '/beer' route
module.exports = function(mongo) {
   beer = new beer(mongo, mongoID);

   router.use((req, res, next) => next()); // init

   router.get('/', (req, res) => beer.getAllBeers(res));

   router.put('/', (req, res) => {
      beer.update(req.body, req.body.field, req.body.value, res);
   });

   router.post('/', (req, res) => {
      beer.addBeer(req.body, res);
   });

   router.delete('/', (req, res) => {
      beer.delete(req.body, res);
   });

   return router;
};