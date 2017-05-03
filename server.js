//requires
var express = require('express');
var mongoose = require('mongoose');
var gem = require('./models/gem');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
//

mongoose.connect('mongoosedb://localhost:27017/gemPractice');

app.get('/gem', function(rec,res){
  // select/read
  Gem.find({}, function(err, gemResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('gemResults ->', gemResults);
      res.send(gemResults);
    }
  });
});

app.post('/gem', function(req, res) {
  console.log('in gem post ->', req.body);

  var newGem = new Gem({
    name: req.body.name,
    gemType: req.body.gemType,
    estimatedValue: req.body.estimatedValue,
    rare: req.body.rare,
    date: req.body.date
  });

  // insert/create
  newGem.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new user created');
      res.sendStatus(201);
    }
  });
});

app.listen(4000, function() {
  console.log('listening on 4000!!');
});
