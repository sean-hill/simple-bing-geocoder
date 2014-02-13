/**
 * Bing Geocoder
 */

var http = require( 'http' );
var Hash = require('hashish');
var querystring = require('querystring');

var version = '0.1.0';

function request ( options, cbk ) {

  http.get( options, function ( response ) {

    var data = "", result;

    response.on("error", function ( err ) {
      return cbk( err );
    });

    response.on("data", function ( chunk ) {
      data += chunk;
    });

    response.on("end", function ( argument ) {
      result = JSON.parse( data );
      return cbk( null, result );
    });

  }).on("error", function (err) {
    return cbk( err );
  });

}

function Geocoder () {}

Geocoder.prototype = {

  geocode: function ( loc, cbk, opts ) {

    if ( ! loc ) {
        return cbk( new Error( "Geocoder.geocode requires a location.") );
    }

    var options = Hash.merge({q: loc}, opts || {});

    var params = {
      host: 'dev.virtualearth.net',
      port: 80,
      path: '/REST/v1/Locations?' + querystring.stringify(options),
      headers: {}
    };

    return request( params, cbk );
  }

  , version: version

};

module.exports = new Geocoder();
