const request = require('request');
const urlDefinations = require('../env');

const forecast = (latitude, longitude, callback) => {
  const weatherUrl = urlDefinations.weatherWithLocation(latitude, longitude);

  request({ url: weatherUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% change of rain`
      );
    }
  });
};

module.exports = forecast;
