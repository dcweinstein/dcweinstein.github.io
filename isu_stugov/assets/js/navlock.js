$(document).ready(function() {
  var top = $('#nav-container').offset().top;
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var difference = top - scrollTop;

    if(difference <= 0) {
      $('#nav-container').css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "z-index": "99"
      });
    }
    if(difference > 0) {
      $("#nav-container").css({
        "position": "relative"
      });
    }
  });
});
