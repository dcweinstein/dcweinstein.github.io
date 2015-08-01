$(document).ready(function() {
  // $('.face-layer').hover(function() {
  //   $(this).animate({
  //     opacity: ".5"
  //   }, 200);
  //   $(this).next().css({"display": "block", "opacity": "1"});
  //   $(this).next().next().css({"display": "block", "opacity": "1"});
  // });
  // $('.face-layer').mouseout(function() {
  //   var isHoverName = $('.face').find("faceName:hover").length;
  //   var isHoverPT = $('.face').find("facePosition:hover").length;
  //   if(!isHoverName && !isHoverPT) {
  //     $(this).animate({
  //       opacity: "0"
  //     }, 200);
  //     $(this).next().css({"display": "none"});
  //     $(this).next().next().css({"display": "none"});
  //   }
  // });

  // open modal on click
  $('.face-layer').click(function(event) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var newWidth = 600;
    var newHeight = 600;
    var newTop = 100;
    var newLeft = 50;
    var newMarginLeft = -300;
    var pictureTop = 110;
    var pictureLeft = 50;
    var pictureMarginLeft = -285;

    if(windowWidth < 600) {
      newWidth = windowWidth;
      newLeft = 0;
      newMarginLeft = 0;
      pictureLeft = 0;
      pictureMarginLeft = 0;
    }
    if(windowHeight < 600) {
      newHeight = windowHeight;
      newTop = 0;
      pictureTop = 10;
    }

    $(this).css({"display": "none"});
    $(this).parent().animate({
      top: pictureTop + "px",
      left: pictureLeft + "%",
      marginLeft: pictureMarginLeft + "px",
      borderRadius: "0",
    }, 300);
    $(this).parent().css({
      "position": "fixed",
      "z-index": 99
    });
    $(this).parent().prev().css({
      "position": "fixed",
      "display": "block",
      "z-index": 99
    });
    $(this).parent().prev().animate({
      top: newTop +"px",
      left: newLeft + "%",
      marginLeft: newMarginLeft + "px",
      width: newWidth + "px",
      height: newHeight + "px",
      opacity: "1",
      borderRadius: "2%",
    }, 300);
    $('.opaque-layer').css({"display": "block"});
    $('.opaque-layer').animate({
      opacity: ".5"
    }, 300);
    $(".face-text").css({"display": "none"});
    $("body").css("overflow", "hidden");
  });


  // close modal
  $('.closeModal').click(function(event) {
    $(this).parent().animate({
      top: "1000px"
    }, 300, function() {
      $(this).css({"display": "none"});
    });
    $(this).parent().next().animate({
      top: "1000px"
    }, 300, function() {
      $(this).css({"display": "none"});
      $(this).css({
        "display": "block",
        "width": "220px",
        "height": "220px",
        "margin": "5px 15px 15px 15px",
        "border-radius": "50%",
        "background-color": "white",
        "position": "relative",
        "top": "0",
        "left": "0",
        "z-index": 98
      });
      $(this).children().css({
        "display": "block",
      });
      $(this).prev().css({
        "top": "0",
        "left": "0",
        "postion": "absolute",
        "width": "220px",
        "height": "220px",
        "margin": "0",
        "border-radius": "50%",
        "background-color": "white",
        "opacity": "0",
        "display": "block"
      });
      $('.face-text').css({"display": "block"});
    });

    $('.opaque-layer').animate({
      opacity: "0"
    }, 300, function() {
      $('.opaque-layer').css({"display": "none"});
    });
    $("body").css("overflow", "");

  });
});
