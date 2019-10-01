const request = require('request');
const urlDefinations = require('../env');

const forecast = (latitude, longitude, callback) => {
  const weatherUrl = urlDefinations.weatherWithLocation(latitude, longitude);

  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(
        undefined,
        `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% change of rain`
      );
    }
  });
};

module.exports = forecast;
