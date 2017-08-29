const express = require('express');
const bodyParser = require('body-parser');
const yargs = require('yargs');
const hbs = require('hbs');
const fs =require('fs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser());

app.set('view engine','hbs');

app.use(express.static(__dirname + '/views'));

app.get('/',(req,res) => {
  res.render('home.hbs');
});

app.post('/resultLocation', function(req, res){
  var location = req.body.location;

  geocode.geocodeAddress(location,(err,results) => {
    if(err) {
      res.send(`<h1>YOUR GIVEN QUERY COULD NOT BE FOUND!! SORRY :(</h1><h5>ERROR MESSAGE: ${err}`);
    } else {
      weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults) => {
      if(errorMessage) {
        res.send(`<h1>YOUR GIVEN QUERY COULD NOT BE FOUND!! SORRY :(</h1><h5>ERROR MESSAGE: ${err}`);
      }  else {
        // console.log(`It's currently : ${weatherResults.temperature} deg F. It feels like ${weatherResults.apperentTemperature} deg F`);
        res.render('resultLocation.hbs', {
          location: results.address,
          lat: results.latitude,
          lng: results.longitude,
          currentIcon: weatherResults
          currentTemperature: weatherResults.temperature,
          currentApperentTemperature: weatherResults.apparentTemperature
          currentIcon: weatherResults.icon,
          currentHumidity: weatherResults.humidity * 100,
          currentWindSpeed: weatherResults.windSpeed,
          currentPressure: weatherResults.pressure,
          weekSummary: weatherResults.summary,
          satSummary: weatherResults.summary,
          satMaxTemp: weatherResults.temperatureHigh,
          satMinTemp: weatherResults.temperatureLow,
          satHumidity: weatherResults.humidity * 100,
          satWindSpeed: weatherResults.windSpeed,
          satPressure: weatherResults.pressure,
          sunSummary: weatherResults.summary,
          sunMaxTemp: weatherResults.temperatureHigh,
          sunMinTemp: weatherResults.temperatureLow,
          sunHumidity: weatherResults.humidity * 100,
          sunWindSpeed: weatherResults.windSpeed,
          sunPressure: weatherResults.pressure,
          monSummary: weatherResults.summary,
          monMaxTemp: weatherResults.temperatureHigh,
          monMinTemp: weatherResults.temperatureLow,
          monHumidity: weatherResults.humidity * 100,
          monWindSpeed: weatherResults.windSpeed,
          monPressure: weatherResults.pressure,
          tuesSummary: weatherResults.summary,
          tuesMaxTemp: weatherResults.temperatureHigh,
          tuesMinTemp: weatherResults.temperatureLow,
          tuesHumidity: weatherResults.humidity * 100,
          tuesWindSpeed: weatherResults.windSpeed,
          tuesPressure: weatherResults.pressure,
          wedSummary: weatherResults.summary,
          wedMaxTemp: weatherResults.temperatureHigh,
          wedMinTemp: weatherResults.temperatureLow,
          wedHumidity: weatherResults.humidity * 100,
          wedWindSpeed: weatherResults.windSpeed,
          wedPressure: weatherResults.pressure,
          thurSummary: weatherResults.summary,
          thurMaxTemp: weatherResults.temperatureHigh,
          thurMinTemp: weatherResults.temperatureLow,
          thurHumidity: weatherResults.humidity * 100,
          thurWindSpeed: weatherResults.windSpeed,
          thurPressure: weatherResults.pressure,
          friSummary: weatherResults.summary,
          friMaxTemp: weatherResults.temperatureHigh,
          friMinTemp: weatherResults.temperatureLow,
          friHumidity: weatherResults.humidity * 100,
          friWindSpeed: weatherResults.windSpeed,
          friPressure: weatherResults.pressure,
          satSummary: weatherResults.summary,
          satMaxTemp: weatherResults.temperatureHigh,
          satMinTemp: weatherResults.satMinTemp,
          satHumidity: weatherResults.satHumidity * 100,
          satWindSpeed: weatherResults.satWindSpeed,
          satPressure: weatherResults.satPressure
        });
      }
    });

    }
  });
  // var html = 'Hello: ' + location + '.<br>' +
  //            '<a href="/">Try again.</a>';
  // res.send(html);
});

// app.get('/',(req,res) => {
//   res.send({
//     title: 'Hello World',
//     page: 'Home page',
//     contents: {
//       name: 'Madhav',
//       lastName: 'Bahl',
//       age: '19',
//       skills: 'Web Developer'
//     }
//   });
// });


app.listen(port, () => {
  console.log(`App is up on server ${port}`);
});
