var url = require('./constants/mongoURL');
module.exports = function(mongo){
   return new Promise((res, rej) => {
      mongo.connect(url, (err, db) => {
         res(db);
      });
   });
};