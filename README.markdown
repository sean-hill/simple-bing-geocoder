# Geocoder

###Installation:

    npm install simple-bing-geocoder

### Usage

You can pass a string representation of a location and a callback function to `geocoder.geocode`. It will accept anything that Bing will accept: cities, streets, countries, etc.

###Example:

	var geocoder = require('simple-bing-geocoder');

	// Geocoding
	geocoder.geocode("350 5th Ave, New York, NY 10118", function ( err, data ) {
	  // do something with data
	}, { key: "YOUR_BING_API_KEY" });

Results will look like standard [Bing JSON Output](http://msdn.microsoft.com/en-us/library/ff701714.aspx)