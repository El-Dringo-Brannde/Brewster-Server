var CRUD = require('./../database/crud');

module.exports = class beer extends CRUD {
   constructor(mongo, mongoID) {
      super(mongo, mongoID, 'beer');
   }

   addBeer(beerData, res) {
      beerData.time = new Date();
      this.create(beerData, res);
   }

   getAllBeers(res) {
      this.read({}, res);
   }
};