var mainContent = document.getElementById9
var lat = document.getElementById('lat').textContent;
lat = Number(lat);
var lng = document.getElementById('lng').textContent;
lng = Number(lng);
console.log(lat);
console.log(lng);

// var currentIcon = document.getElementById('currentIcon').textContent;


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
  map.style.display = 'block';
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
