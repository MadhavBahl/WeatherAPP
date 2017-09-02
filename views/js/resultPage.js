var mainContent = document.getElementById('mainContent');
var lat = document.getElementById('lat').textContent;
lat = Number(lat);
var lng = document.getElementById('lng').textContent;
lng = Number(lng);
console.log(lat);
console.log(lng);

var currentIcon = document.getElementById('currentIcon').textContent;
var currentWeather = document.getElementById('currentWeather');
var lineBreak = document.getElementById('lineBreak');
var currentData = document.getElementById('currentData');
var showMore = document.getElementById('showMore');
console.log(currentIcon);

if(currentIcon === 'rain'){
  mainContent.style.backgroundImage = "url('../img/rain.jpg')";
  currentWeather.style.color = '#C7C7C7';
  lineBreak.src = '../img/break2.png';
  currentData.style.color = '#C0C0C0';
} else if(currentIcon === 'clear-day'){
  mainContent.style.backgroundImage = "url('../img/clear-day.jpg')";
} else if(currentIcon === 'clear-night'){
  mainContent.style.backgroundImage = "url('../img/clear-night.jpg')";
  currentWeather.style.color = '#C7C7C7';
  lineBreak.src = '../img/break2.png';
  currentData.style.color = '#C0C0C0';
} else if(currentIcon === 'partly-cloudy-night'){
  mainContent.style.backgroundImage = "url('../img/partly-cloudy-night.jpg')";
  currentWeather.style.color = '#C7C7C7';
  lineBreak.src = '../img/break2.png';
  currentData.style.color = '#C0C0C0';
} else if(currentIcon === 'partly-cloudy-day'){
  mainContent.style.backgroundImage = "url('../img/partly-cloudy-day.jpg')";
} else if(currentIcon === 'cloudy'){
  mainContent.style.backgroundImage = "url('../img/cloudy.jpg')";
  currentWeather.style.color = '#C7C7C7';
  lineBreak.src = '../img/break2.png';
  currentData.style.color = '#C0C0C0';
} else if(currentIcon === 'fog'){
  mainContent.style.backgroundImage = "url('../img/fog.jpg')";
} else if(currentIcon === 'sleet'){
  mainContent.style.backgroundImage = "url('../img/sleet.jpg')";
  currentWeather.style.color = '#C7C7C7';
  lineBreak.src = '../img/break2.png';
  currentData.style.color = '#C0C0C0';
} else if(currentIcon === 'snow'){
  mainContent.style.backgroundImage = "url('../img/snow.jpg')";
} else if(currentIcon === 'wind'){
  mainContent.style.backgroundImage = "url('../img/wind.jpg')";
}


function initMap() {
  var uluru = {lat: lat, lng: lng};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function showMap(){

  var map = document.getElementById('map');
  var beforMap = document.getElementById('beforeMap');
  var mapTrigger = document.getElementById('mapTrigger');
  map.style.display = 'flex';
  beforeMap.style.display = 'none';
  initMap();
  mapTrigger.style.display = 'none';
}
// var overlay = document.getElementById("overlay");
// var mainContent = document.getElementById("mainContent");
// mainContent.style.display = 'none';
// map.addEventListener('load', function(){
//   overlay.style.display = 'none';
//   mainContent.style.display = 'block';
//   console.log("LOADER HIDEN");
// })
