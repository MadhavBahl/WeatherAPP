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
        var date = new Date();
        var dayNumber = date.getDay();
        var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];

        var weatherForecast = {
          location: results.address,
          lat: results.latitude,
          lng: results.longitude,
          currentIcon: weatherResults.currentIcon,
          currentTemperature: weatherResults.currentTemperature.toPrecision(4),
          currentApperentTemperature: weatherResults.currentApperentTemperature.toPrecision(4),
          currentIcon: weatherResults.currentIcon,
          currentHumidity: weatherResults.currentHumidity,
          currentWindSpeed: weatherResults.currentWindSpeed,
          currentPressure: weatherResults.currentPressure/1000,
          weekSummary: weatherResults.weekSummary,
          sat: days[(dayNumber%7)],
          satSummary: weatherResults.satSummary,
          satMaxTemp: weatherResults.satMaxTemp.toPrecision(4),
          satMinTemp: weatherResults.satMinTemp.toPrecision(4),
          satHumidity: weatherResults.satHumidity,
          satWindSpeed: weatherResults.satWindSpeed,
          satPressure: weatherResults.satPressure/1000,
          sun: days[(dayNumber+1)%7],
          sunSummary: weatherResults.sunSummary,
          sunMaxTemp: weatherResults.sunMaxTemp.toPrecision(4),
          sunMinTemp: weatherResults.sunMinTemp.toPrecision(4),
          sunHumidity: weatherResults.sunHumidity,
          sunWindSpeed: weatherResults.sunWindSpeed,
          sunPressure: weatherResults.sunPressure/1000,
          sat: days[(dayNumber+2)%7],
          monSummary: weatherResults.monSummary,
          monMaxTemp: weatherResults.monMaxTemp.toPrecision(4),
          monMinTemp: weatherResults.monMinTemp.toPrecision(4),
          monHumidity: weatherResults.monHumidity,
          monWindSpeed: weatherResults.monWindSpeed,
          monPressure: weatherResults.monPressure/1000,
          sat: days[(dayNumber+3)%7],
          tuesSummary: weatherResults.tuesSummary,
          tuesMaxTemp: weatherResults.tuesMaxTemp.toPrecision(4),
          tuesMinTemp: weatherResults.tuesMinTemp.toPrecision(4),
          tuesHumidity: weatherResults.tuesHumidity,
          tuesWindSpeed: weatherResults.tuesWindSpeed,
          tuesPressure: weatherResults.tuesPressure/1000,
          sat: days[(dayNumber+4)%7],
          wedSummary: weatherResults.wedSummary,
          wedMaxTemp: weatherResults.wedMaxTemp.toPrecision(4),
          wedMinTemp: weatherResults.wedMinTemp.toPrecision(4),
          wedHumidity: weatherResults.wedHumidity,
          wedWindSpeed: weatherResults.wedWindSpeed,
          wedPressure: weatherResults.wedPressure/1000,
          sat: days[(dayNumber+5)%7],
          thurSummary: weatherResults.thurSummary,
          thurMaxTemp: weatherResults.thurMaxTemp.toPrecision(4),
          thurMinTemp: weatherResults.thurMinTemp.toPrecision(4),
          thurHumidity: weatherResults.thurHumidity,
          thurWindSpeed: weatherResults.thurWindSpeed,
          thurPressure: weatherResults.thurPressure/1000,
          sat: days[(dayNumber+6)%7],
          friSummary: weatherResults.friSummary,
          friMaxTemp: weatherResults.friMaxTemp.toPrecision(4),
          friMinTemp: weatherResults.friMinTemp.toPrecision(4),
          friHumidity: weatherResults.friHumidity,
          friWindSpeed: weatherResults.friWindSpeed,
          friPressure: weatherResults.friPressure/1000,
          sat: days[(dayNumber+7)%7],
          sat2Summary: weatherResults.sat2Summary,
          sat2MaxTemp: weatherResults.sat2MaxTemp.toPrecision(4),
          sat2MinTemp: weatherResults.sat2MinTemp.toPrecision(4),
          sat2Humidity: weatherResults.sat2Humidity,
          sat2WindSpeed: weatherResults.sat2WindSpeed,
          sat2Pressure: weatherResults.sat2Pressure/1000
        };
        console.log(weatherForecast);
        res.render('resultLocation.hbs', weatherForecast);
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
