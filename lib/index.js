var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db')
var Query = require('./query');

var app = express();
app.use(bodyParser.json());

var PORT = process.env.PORT || 5000;

app.get('/', function(request, response) {

});

app.get('/cron/check', function(request, response) {

});

app.post('/flights', function(request, response) {
  var url = request.body.url;
  var q = new Query({ url: url });

  db.save(q, request.body.number).then(function(flight) {
    response.status(201).send({
      id: flight._id,
      date: flight.date,
      number: flight.pnumber,
      query: flight.query
    });
  });
});

app.listen(PORT, function() {
  console.log('app running');
});
