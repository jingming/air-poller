var sms = requre('./sms');
var gapi = requre('./gapi');

module.exports = {
  addFlights: function(options, flights, phoneNumber) {
    var query = gapi.buildQpxRequestData(options, flights);

  }
};
