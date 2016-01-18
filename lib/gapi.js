var request = require('request');
var _ = require('underscore');
var util = require('util');

var API_KEY = process.env.GAPI_KEY;
var QPX_URL = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + API_KEY;
var SHORT_URL = 'https://www.googleapis.com/urlshortener/v1/url?key=' + API_KEY;

function _buildLeg(segment) {
  var leg = segment.leg[0];
  return {
    name: segment.flight.carrier + segment.flight.number,
    from: leg.origin,
    dep: leg.departureTime,
    to: leg.destination,
    arr: leg.arrivalTime
  };
};

function _buildPromise(params) {
  return new Promise(function(resolve, reject) {
    request(params, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
};

function parseResponseData(response) {
  return _.map(response.trips.tripOption, function(option) {

    return {
      price: option.saleTotal,
      flights: _.map(option.slice, function(slice) {
        return _.map(slice.segment, _buildLeg);
      })
    };

  });
};

function queryQpxExpress(request) {
  return _buildPromise({
    url: QPX_URL,
    method: 'POST',
    json: request
  });
};

function queryUrlShortener(url) {
  return _buildPromise({
    url: SHORT_URL,
    method: 'POST',
    json: {
      longUrl: url
    }  
  });
};

module.exports = {

  buildQpxRequestData: function(options, flights) {
    return {
      "request": {
        "passengers": {
          "adultCount": 1
        },
        "slice": [
          {
            "origin": "SFO",
            "destination": "YYZ",
            "date": "2016-02-02"
          },
          {
            "origin": "YYZ",
            "destination": "SFO",
            "date": "2016-02-05"
          }
        ],
        "solutions": 5
      }
    };
  },
  parseResponseData: parseResponseData,

  queryQpxExpress: queryQpxExpress,
  queryUrlShortener: queryUrlShortener

};
