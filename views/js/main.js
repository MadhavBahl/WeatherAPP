function showLoader() {
  var overlay = document.getElementById("overlay");
  var mainContent = document.getElementById("mainContent");
  overlay.style.display = 'block';
  mainContent.style.display = 'none';
  setTimeout( function(){
    overlay.style.display = 'none';
    mainContent.style.display = 'block';
  }, 19800);
}
 /* ======= Search Bar Animation ======= */
 // function ChangeColor() {
 //   var color = document.getElementById('myColor').value;
 //   document.getElementById('ColorCode').style.color = color;
 //   document.getElementById('search-button').style.background = color;
 //   document.getElementById("ColorCode").innerHTML = color;
 // }
