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
var modalBody = document.getElementById('modalBody');

var satBKG = document.getElementById('satBKG');
var sat = document.getElementById('sat');
var satIcon = document.getElementById('satIcon').textContent;
correctBKG(satIcon,satBKG,sat);
console.log(satIcon);
modalBody.style.backgroundImage = `url('../img/`+`${satIcon}`+`.jpg')`;
var sunBKG = document.getElementById('sunBKG');
var sun = document.getElementById('sun');
var sunIcon = document.getElementById('sunIcon').textContent;
correctBKG(sunIcon,sunBKG,sun);
console.log(sunIcon);
var monBKG = document.getElementById('monBKG');
var mon = document.getElementById('mon');
var monIcon = document.getElementById('monIcon').textContent;
correctBKG(monIcon,monBKG,mon);
console.log(monIcon);
var tuesBKG = document.getElementById('tuesBKG');
var tues = document.getElementById('tues');
var tuesIcon = document.getElementById('tuesIcon').textContent;
correctBKG(tuesIcon,tuesIcon,tues);
console.log(tuesIcon);
var wedBKG = document.getElementById('wedBKG');
var wed = document.getElementById('wed');
var wedIcon = document.getElementById('wedIcon').textContent;
correctBKG(wedIcon,wedBKG,wed);
console.log(wedIcon);
var thurBKG = document.getElementById('thurBKG');
var thur = document.getElementById('thur');
var thurIcon = document.getElementById('thurIcon').textContent;
correctBKG(thurIcon,thurBKG,thur);
console.log(thurIcon);
var friBKG = document.getElementById('friBKG');
var fri = document.getElementById('fri');
var friIcon = document.getElementById('friIcon').textContent;
correctBKG(friIcon,friBKG,fri);
console.log(friIcon);
var sat2BKG = document.getElementById('sat2BKG');
var sat2 = document.getElementById('sat2');
var sat2Icon = document.getElementById('sat2Icon').textContent;
correctBKG(sat2Icon,sat2BKG,sat2);
console.log(sat2Icon);


/* ========= USING TEMPLATE STRING WORK WAS DONE IN ONE LINE ========= */

// if(satIcon === 'clear-day'){
//   modalBody.style.backgroundImage = "url('../img/clear-day.jpg')";
// } else if(satIcon === 'clear-night'){
//   modalBody.style.backgroundImage = "url('../img/clear-night.jpg')";
// } else if(satBKG === 'partly-cloudy-night'){
//    modalBody.style.backgroundImage = "url('../img/partly-cloudy-night.jpg')";
// } else if(satIcon === 'partly-cloudy-day'){
//   modalBody.style.backgroundImage = "url('../img/partly-cloudy-day.jpg')";
// } else if(satIcon === 'cloudy'){
//    modalBody.style.backgroundImage = "url('../img/cloudy.jpg')";
// } else if(satIcon === 'fog'){
//   modalBody.style.backgroundImage = "url('../img/fog.jpg')";
// } else if(satIcon === 'sleet'){
//   modalBody.style.backgroundImage = "url('../img/sleet.jpg')";
// } else if(satIcon === 'snow'){
//   modalBody.style.backgroundImage = "url('../img/snow.jpg')";
// } else if(satIcon === 'wind'){
//   modalBody.style.backgroundImage = "url('../img/wind.jpg')";
// }

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

function correctBKG(icon,bkg,day) {
  bkg.src = `../img/` + `${icon}` + '.jpg';
  if(icon === 'rain'){
    day.style.color = '#D7D7D7';
  } else if(icon === 'clear-day'){
    day.style.color = '#131313';
  } else if(icon === 'clear-night'){
    day.style.color = '#D7D7D7';
  } else if(icon === 'partly-cloudy-night'){
    day.style.color = '#D7D7D7';
  } else if(icon === 'partly-cloudy-day'){
    day.style.color = '#131313';
  } else if(icon === 'cloudy'){
    day.style.color = '#D7D7D7';
  } else if(icon === 'fog'){
    day.style.color = '#131313';
  } else if(icon === 'sleet'){
    day.style.color = '#D7D7D7';
  } else if(icon === 'snow'){
    day.style.color = '#131313';
  }

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
