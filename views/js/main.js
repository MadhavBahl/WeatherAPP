function showLoader() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = 'block';
  setTimeout( function(){
    overlay.style.display = 'none';
  }, 7800);
}
