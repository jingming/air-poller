var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

var Flight = mongoose.model('Flight', {
    date: Date,
    query: String,
    pnumber: String
});

module.exports = {
  save: function(query, number) {
    var date = new Date(query.query.request.slice[0].date);
    var flight = new Flight({ 
      date: date,
      query: query.url,
      pnumber: number
    });

    return new Promise(function(resolve, reject) {
      flight.save(function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(flight);
        }
      });
    });
  }
}
