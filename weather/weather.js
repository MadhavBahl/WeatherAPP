const request = require('request');

var getWeather = (lat,lng,callback) => {

  request({
    url: `https://api.darksky.net/forecast/f1d413224992adae584dd90b72f51905/${lat},${lng}`,
    json: true
  },(error,response,body) => {
    if(error) {
      callback('Unable to connect to forecast.io servers');
    } else if(response.statusCode === 400){
      callback('Unable to fetch whether');
    } else if (response.statusCode === 200) {

        var returnObj = {

          currentTemperature: (body.currently.temperature - 32)/1.8,
          currentApperentTemperature: (body.currently.apparentTemperature- 32)/1.8,
          currentIcon: body.currently.icon,
          currentHumidity: body.currently.humidity * 100,
          currentWindSpeed: body.currently.windSpeed,
          currentPressure: body.currently.pressure,
          weekSummary: body.daily.summary,
          satSummary: body.daily.data[0].summary,
          satMaxTemp: (body.daily.data[0].temperatureHigh- 32)/1.8,
          satMinTemp: (body.daily.data[0].temperatureLow- 32)/1.8,
          satHumidity: body.daily.data[0].humidity * 100,
          satWindSpeed: body.daily.data[0].windSpeed,
          satPressure: body.daily.data[0].pressure,
          sunSummary: body.daily.data[1].summary,
          sunMaxTemp: (body.daily.data[1].temperatureHigh- 32)/1.8,
          sunMinTemp: (body.daily.data[1].temperatureLow- 32)/1.8,
          sunHumidity: body.daily.data[1].humidity * 100,
          sunWindSpeed: body.daily.data[1].windSpeed,
          sunPressure: body.daily.data[1].pressure,
          monSummary: body.daily.data[2].summary,
          monMaxTemp: (body.daily.data[2].temperatureHigh- 32)/1.8,
          monMinTemp: (body.daily.data[2].temperatureLow- 32)/1.8,
          monHumidity: body.daily.data[2].humidity * 100,
          monWindSpeed: body.daily.data[2].windSpeed,
          monPressure: body.daily.data[2].pressure,
          tuesSummary: body.daily.data[3].summary,
          tuesMaxTemp: (body.daily.data[3].temperatureHigh- 32)/1.8,
          tuesMinTemp: (body.daily.data[3].temperatureLow- 32)/1.8,
          tuesHumidity: body.daily.data[3].humidity * 100,
          tuesWindSpeed: body.daily.data[3].windSpeed,
          tuesPressure: body.daily.data[3].pressure,
          wedSummary: body.daily.data[4].summary,
          wedMaxTemp: (body.daily.data[4].temperatureHigh- 32)/1.8,
          wedMinTemp: (body.daily.data[4].temperatureLow- 32)/1.8,
          wedHumidity: body.daily.data[4].humidity * 100,
          wedWindSpeed: body.daily.data[4].windSpeed,
          wedPressure: body.daily.data[4].pressure,
          thurSummary: body.daily.data[5].summary,
          thurMaxTemp: (body.daily.data[5].temperatureHigh- 32)/1.8,
          thurMinTemp: (body.daily.data[5].temperatureLow- 32)/1.8,
          thurHumidity: body.daily.data[5].humidity * 100,
          thurWindSpeed: body.daily.data[5].windSpeed,
          thurPressure: body.daily.data[5].pressure,
          friSummary: body.daily.data[6].summary,
          friMaxTemp: (body.daily.data[6].temperatureHigh- 32)/1.8,
          friMinTemp: (body.daily.data[7].temperatureLow- 32)/1.8,
          friHumidity: body.daily.data[7].humidity * 100,
          friWindSpeed: body.daily.data[7].windSpeed,
          friPressure: body.daily.data[7].pressure,
          sat2Summary: body.daily.data[0].summary,
          sat2MaxTemp: (body.daily.data[0].temperatureHigh- 32)/1.8,
          sat2MinTemp: (body.daily.data[0].temperatureLow- 32)/1.8,
          sat2Humidity: body.daily.data[0].humidity * 100,
          sat2WindSpeed: body.daily.data[0].windSpeed,
          sat2Pressure: body.daily.data[0].pressure
        };
        // console.log(returnObj);
      callback(undefined , returnObj );
      // console.log(`The current Temperature is : ${body.currently.temperature}`);
    }
    // if(!error && response.statusCode === 200){
    //   console.log(`The current Temperature is : ${body.currently.temperature}`);
    // } else {
    //   console.log('Unable to fetch whether.');
    // }
  });

};

module.exports.getWeather = getWeather;
