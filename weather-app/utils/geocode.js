const request = require('request');
const urlDefinations = require('../env');

const geocode = (address, callback) => {
  const mapUrl = urlDefinations.mapWithAddress(address);

  request({ url: mapUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
