$(document).ready(function() {
  // display menu
  var menuOpen = false;
  $('#hamburger').click(function() {
    if(!menuOpen) {
      $('#mini-nav').css({"display": "block"});
      menuOpen = true;
    }
    else {
      $('#mini-nav').css({"display": "none"});
      menuOpen = false;
    }
  });
});
