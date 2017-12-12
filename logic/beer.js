var crud = require('./crud');
module.exports = class beer extends crud{
   constructor(mongoDB){
      super(mongoDB, 'beer');
   }

   addBeer(beerData){
      beerData.time = new Date();
      this.create(beerData);
   }

   getAllBeers(res){
      this.read({}, res);
   }
};