var _ = require('underscore');
var util = require('util');

var GOOGLE_FLIGHTS_BASE_URL = 'https://www.google.com/flights/#search';

var ONE_WAY = {
  urlFlag: 'tt=o',
  urlQuery: function(query) {
    var flight = query.request.slice[0];
    return util.format('f=%s;t=%s;d=%s', flight.origin, flight.destination, flight.date);
  },
  flights: function(url) {
    return [{
      origin: url.match(/.*f=([A-Z]{3}).*/)[1],
      destination: url.match(/.*t=([A-Z]{3}).*/)[1],
      date: url.match(/.*d=(\d{4}-\d{2}-\d{2}).*/)[1]
    }]
  }
}

var ROUND_TRIP = {
  urlFlag: '',
  urlQuery: function(query) {
    var o = query.request.slice[0];
    var r = query.request.slice[1];
    return util.format('f=%s;t=%s;d=%s;r=%s', o.origin, o.destination, o.date, r.date);
  },
  flights: function(url) {
    var o = url.match(/.*f=([A-Z]{3}).*/)[1];
    var d = url.match(/.*t=([A-Z]{3}).*/)[1];

    return [{
      origin: o,
      destination: d,
      date: url.match(/.*d=(\d{4}-\d{2}-\d{2}).*/)[1]
    }, {
      origin: d,
      destination: o,
      date: url.match(/.*r=(\d{4}-\d{2}-\d{2}).*/)[1]
    }]
  }
}

var MULTI_CITY = {
  urlFlag: 'tt=m',
  urlQuery: function(query) {
    return 'iti=' + _.map(query.request.slice, function(slice) {
      return util.format('%s_%s_%s', slice.origin, slice.destination, slice.date);
    }).join('*');  
  },
  flights: function(url) {
    var q = url.match(/.*iti=([A-Z\d-_*]+).*/)[1];
    return _.map(url.split('*'), function(segment) {
      var details = segment.split('_');
      return {
        origin: details[0],
        destination: details[1],
        date: details[2]
      }
    });
  }
}

function _identifyQuery(query) {
  // one way
  var flights = query.request.slice.length;
  if (flights === 1) {
    return ONE_WAY;
  }  

  // round trip
  var f1 = query.request.slice[0];
  var f2 = query.request.slice[1];
  if (flights === 2 && f1.origin === f2.destination && f1.destination === f2.origin) {
    return ROUND_TRIP;
  }

  // multi city
  return MULTI_CITY;
}

function _identifyUrl(url) {
  if (url.indexOf(ONE_WAY.urlFlag) > -1) {
    return ONE_WAY;
  }

  if (url.indexOf(MULTI_CITY.urlFlag) > -1) {
    return MULTI_CITY;
  }

  return ROUND_TRIP;
}

function _buildUrl(query, trip) {
  var type = _identifyQuery(query);
  var fragments = [GOOGLE_FLIGHTS_BASE_URL, type.urlFlag, type.urlQuery(query)];

  if (!_.isUndefined(trip)) {
    var sel = 'sel=' + _.map(trip.flights, function(segment) {
      return _.map(segment, function(leg) {
        return util.format('%s%s0%s', leg.from, leg.to, leg.name);
      }).join('-');
    }).join(',')

    fragments.push(sel);
  }

  return fragments.join(';');
}

function _buildQuery(url) {
  var type = _identifyUrl(url);
  return {
    request: {
      passengers: {
        adultCount: 1
      },
      slice: type.flights(url),
      solutions: 5
    }
  }
}

function Query(options) {
  options = options || {};
  this._query = options.query;
  this._trip = options.trip;
  this._url = options.url;
};

Query.prototype = {
  get query() {
    this._query = this._query || _buildQuery(this._url);
    return this._query
  },

  get trip() {
    this._trip = this._trip || _buildTrip(this._url);
    return this._trip;
  },

  get url() {
    this._url = this._url || _buildUrl(this._trip, this._query);
    return this._url;
  }
}

module.exports = Query;
