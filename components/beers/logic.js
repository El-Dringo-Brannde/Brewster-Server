let valid = require('./validator')
let mongodb = require('./../../mongoDB/mongo')
let mongoID = require('mongodb').ObjectID
let self = null;
let boom = require('boom')
let uuid = require('uuid/v4')


// Change as needed
const databaseName = 'Brewster'
const collectionName = 'Beers'
module.exports = class beerController extends mongodb {
   constructor() {
      super(databaseName, collectionName)
      self = this;
   }

   //GET Section
   async getBeers(req, res) {
      res.json(await self.read())
   }


   //[POST] Section
   async createBeer(req, res) {

   }
}