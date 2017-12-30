var CRUD = require('./../database/crud');

module.exports = class user extends CRUD {
   constructor(mongo, mongoID) {
      super(mongo, mongoID, 'users');
   }

   addUser(data, res) {
      data.created = new Date();
      this.create(data, res);
   }


};