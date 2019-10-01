const request = require('request');
const urlDefinations = require('./env');

// const weatherUrl = urlDefinations.weatherUrl;

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location!');
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% change of rain`
//     );
//   }
// });

const mapUrl = urlDefinations.mapUrl;

request({ url: mapUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.');
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
