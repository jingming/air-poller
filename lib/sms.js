var _ = require('underscore');
var util = require('util');
var gapi = require('./gapi');
var url = require('./url');

var ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
var AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

var twilio = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

var FROM_NUMBER = '+18589354448';
var DATE_REGEX = /^.*(\d\d-\d\d)T(\d\d:\d\d).*$/;

function _dateJoiner(match, p1, p2) {
  return [p1, p2].join(' ');
};

function _flightToSms(flight) {
  return util.format(
    '%s: %s (%s) - %s (%s)',
    flight.name,
    flight.from,
    flight.dep.replace(DATE_REGEX, _dateJoiner),
    flight.to,
    flight.arr.replace(DATE_REGEX, _dateJoiner)
  );
};

function _buildFlightMessage(trip) {
  return _.map(trip.flights, function(segment) {
    return _.map(segment, _flightToSms).join('\n');
  }).join('\n') + '\nPrice: ' + trip.price.replace('USD', '$');
}

module.exports = {

  buildSmsBody: function(trips, query, success) {
    var msgs = {};
    _.each(trips, function(trip) {
      msgs[url.buildUrl(trip, query)] = _buildFlightMessage(trip);
    });

    var shortUrls = _.map(Object.keys(msgs), function(url) {
      return gapi.queryUrlShortener(url);
    });

    Promise.all(shortUrls).then(function(urls) {
      var body = _.map(urls, function(url) {
        return msgs[url.longUrl] + ' ' + url.id;
      }).join('\n\n');

      success(body);
    });
  },

  sendMessage: function(to, body) {
    twilio.sendMessage({
      from: FROM_NUMBER,
      to: to,
      body: body
    });
  }

};