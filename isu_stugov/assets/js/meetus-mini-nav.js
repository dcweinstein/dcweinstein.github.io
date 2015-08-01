$(document).ready(function() {
  // display menu
  var menuOpen = false;
  $('.mini-filter-main').click(function() {
    if(!menuOpen) {
      $('.mini-filter-button').css({"display": "block"});
      menuOpen = true;
    }
    else {
      $('.mini-filter-button').css({"display": "none"});
      menuOpen = false;
    }
  });
});
