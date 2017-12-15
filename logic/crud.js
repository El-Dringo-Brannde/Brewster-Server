module.exports = class CRUD{
   constructor(mongoDB, mongoID, collName){
      this.mongoDB = mongoDB;
      this.mongoObj = mongoID;
      this.db = this.mongoDB.collection(collName);
   }

   create(data,res){
      this.db.insertOne(data, (err, succ) => {
         if (err)
            throw err; 
         res.send(succ);
      });
   }

   read(selector, res){
      this.db.find(selector).toArray((err, succ) => {
         res.send(succ);
      });
   }

   update(obj, field, value, res){
      obj[field] =  value; 
      obj = obj.data;
      obj._id = this.mongoObj(obj._id);
      
      this.db.findOneAndUpdate({_id: obj._id}, obj, (err, succ) => {
            res.send(succ);
      });
   }

   delete(data, res){
      this.db.findOneAndDelete({_id: this.mongoObj(data._id)}, (err, succ) => {
         res.send(succ);
      });
   }


   
};