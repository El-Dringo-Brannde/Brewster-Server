let router = require('express').Router();
let controller = require('./logic');
let validator = require('./validator');
let validate = require('express-validation')


module.exports = function() {
   controller = new controller();

   router.use((req, res, next) => next()); //init

   // [GET]
   router.get('/', controller.getBeers)

   //[PATCH]


   //[POST]
   router.post('/', controller.createBeer)


   // [DELETE]



   router.use('*', (req, res) => res.json({ err: `Oh nose, ${req.originalUrl} doesn't exist` }))
   return router;
}

