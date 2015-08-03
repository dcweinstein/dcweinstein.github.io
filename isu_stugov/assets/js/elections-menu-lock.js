$(document).ready(function() {
  var top = $('.elections-menu').offset().top;
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var difference = top - scrollTop;

    if(difference <= 0 ) {
      $('.elections-menu').css({
        "position": "fixed",
        "top": "0",
        "left": "0"
      });
    }
    if(difference > 0) {
      $('.elections-menu').css({
        "position": "relative"
      });
    }
  });
});
