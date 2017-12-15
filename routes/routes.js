var beer = require('./../logic/beer');
var mongoID = require('mongodb').ObjectID;
module.exports = function(app, mongo){
   beer = new beer(mongo, mongoID);


   app.get('/foo', (req, res) => res.send('Hello World!'));

   app.get('/beer', (req,res) => beer.getAllBeers(res));

   app.post('/beer', (req,res) => {
      beer.addBeer(req.body, res);
   });

   app.put('/beer', (req,res) => {
      beer.update(req.body, req.body.field, req.body.value, res);
   });

   app.delete('/beer', (req,res) => {
      beer.delete(req.body, res);
   });

   

   app.put('/user', function (req, res) {
      res.send('Got a PUT request at /user');
   });

   app.listen(3105, () => console.log('Example app listening on port 3000!'));

};