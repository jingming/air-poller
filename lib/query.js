var _ = require('underscore');
var util = require('util');

var GOOGLE_FLIGHTS_BASE_URL = 'https://www.google.com/flights/#search';

function Query(options) {
  options = options || {};
  this.query = options.query;
  this.trip = options.trip;
  this.url = options.url;
};
Query.prototype.buildSel = function() {
  return 'sel=' + _.map(this.trip.flights, function(segment) {
    return _.map(segment, function(leg) {
      return util.format('%s%s0%s', leg.from, leg.to, leg.name);
    }).join('-');
  }).join(','); 
}
Query.prototype.toUrl = function() {
  if (!_.isUndefined(this.url)) {
      return this.url;
    }

    var fragments = [GOOGLE_FLIGHTS_BASE_URL, this.getType(), this.buildQuerySegment()];
    if (!_.isUndefined(this.trip)) {
      fragments.push(this.buildSel(this.trip));
    }
    this.url = fragments.join(';');
    return this.url;
}

function OneWay() { Query.apply(this, arguments); }
util.inherits(OneWay, Query);
OneWay.prototype.getType = function() { return 'tt=o'; }
OneWay.prototype.buildQuerySegment = function() {
  var flight = this.query.request.slice[0];
  return util.format('f=%s;t=%s;d=%s', slice.origin, slice.destination, slice.date);
}

function RoundTrip() { Query.apply(this, arguments); }
util.inherits(RoundTrip, Query);
RoundTrip.prototype.getType = function() { return ''; }
RoundTrip.prototype.buildQuerySegment = function() {
  var o = this.query.request.slice[0];
  var r = this.query.request.slice[1];
  return util.format('f=%s;t=%s;d=%s;r=%s', o.origin, o.destination, o.date, r.date);
}

function MultiCity() { Query.apply(this, arguments); }
util.inherits(MultiCity, Query);
MultiCity.prototype.getType = function() { return 'tt=m'; }
MultiCity.prototype.buildQuerySegment = function() {
  return 'iti=' + _.map(this.query.request.slice, function(slice) {
    return util.format('%s_%s_%s', slice.origin, slice.destination, slice.date);
  }).join('*');
}

function _identifyUrl(url) {

}

function _identifyQuery(query) {
  if (query.request.slice.length == 1) {
    return OneWay;
  }

  if (query.request.slice.length == 2 && 
    query.request.slice[0].origin == query.request.slice[1].destination &&
    query.request.slice[0].destination == query.request.slice[1].origin    
  ) {
    return RoundTrip;
  }

  return MultiCity;
}


module.exports = {
  
  buildUrl: function(trip, query) {

    var T = _identifyQuery(query);
    return new T({ trip: trip, query: query }).toUrl();

  },
  parseUrl: function() {

  }

}