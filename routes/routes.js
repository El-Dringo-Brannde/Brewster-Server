var beer = require('./../logic/beer');
module.exports = function(app, mongoDB){
   beer = new beer(mongoDB);


   app.get('/foo', (req, res) => res.send('Hello World!'));

   app.get('/beer', (req,res) => beer.getAllBeers(res));

   app.post('/beer', (req,res) => {
      beer.addBeer(req.body);
      res.send('good job');
   });

   app.put('/user', function (req, res) {
      console.log('yay');
      res.send('Got a PUT request at /user');
   });

   app.listen(3000, () => console.log('Example app listening on port 3000!'));

};