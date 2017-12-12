module.exports = class crud{
   constructor(mongo, collName){
      this.mongo = mongo;
      this.db = this.mongo.collection(collName);
   }

   create(data){
      this.db.insertOne(data, (err, succ) => {
         if (err)
            throw err; 
      });
   }

   read(selector, res){
      this.db.find(selector).toArray((err, succ) => {
         res.send(succ);
      });
   }
};