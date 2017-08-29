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

app.post('/', function(req, res){
  var location = req.body.location;

  geocode.geocodeAddress(location,(err,results) => {
    if(err) {
      res.send(`ERROR: ${err}`);
    } else {
      var html = `<h1>LOCATION : ${results.address} </h1>`
      res.send(html);
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
