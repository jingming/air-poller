var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

var Flight = mongoose.model('Flight', {
    date: Date,
    query: String,
    pnumber: String
});

module.exports = {
  saveFlight: function(query) {
    var date = new Date(query.request.slice[0].date);
    var flight = new Flight({ 
      date: date,
      query: JSON.stringify(query) 
    });
    flight.save(function(err) {
      if (err) {
        console.log('Encountered while saving flight: ' + err);
        return;
      } 
        
      console.log('Successfully saved flight for querying');
    });
  }
}
