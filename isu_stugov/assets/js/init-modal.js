$(document).ready(function() {

  var scrollTop;
  var scrollLeft;
  var top;
  var left;
  var width;
  var height;

  // Set modal content
  $('#initOne').click(function() {
    $('.project').html('Bike Share Program');
    $('.project-manager').html('Nick Terhall');
    $('.goal').html('Install card scanners and bikes on campus so that students can checkout bikes from campus and return at any other campus bike rack');
    $('.more-info-selector').attr('href', "Bike-Share-Document.pdf");
  });

  // Open Modal
  $('.init-div').click(function() {
    console.log("clicked");
    $("body").css("overflow", "hidden");
    scrollTop = $(window).scrollTop();
    scrollLeft = $(window).scrollLeft();
    top = $(this).offset().top;
    left = $(this).offset().left;
    width = $(this).width();
    height = $(this).height();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var newHeight = 600;
    var newWidth = 600;

    top -= scrollTop;
    left -= scrollLeft;

    $('.modal-frame').css({
      "top": top,
      "left": left,
      "width": width,
      "height": height,
      "borderRadius": "0",
      "display": "block"
    });
    $('.opaque-back').css({
      "display": "block"
    });
    $('#close-Modal').css({
      "opacity": "1"
    });
    $('.project').css({
      "opacity": "1"
    });
    $('.pm-title').css({
      "opacity": "1"
    });
    $('.project-manager').css({
      "opacity": "1"
    });
    $('.goal-title').css({
      "opacity": "1"
    });
    $('.goal').css({
      "opacity": "1"
    });
    $('.more-info-selector').css({
      "opacity": "1"
    });

    var newTop = $(window).height();
    newTop = newTop / 2;
    newTop -= 285;

    var newLeft = $(window).width();
    newLeft = newLeft / 2;
    newLeft -= 285;

    if(windowHeight < 600) {
      newTop = 0;
      newHeight = windowHeight;
    }
    if(windowWidth < 600) {
      newLeft = 0;
      newWidth = windowWidth;
    }

    $('.modal-frame').animate({
      width: newWidth + 'px',
      height: newHeight + 'px',
      top: newTop + 'px',
      left: newLeft + 'px',
      borderRadius: '1.5%'
    }, 500);
    $('.opaque-back').animate({
      opacity: '.5'
    });
  });


  // Close Modal
  $('#close-Modal').click(function() {
    $('.modal-frame').animate({
      width: width,
      height: height,
      top: top,
      left: left,
      borderRadius: '0'
    }, 500, function() {
      $('.modal-frame').css({"display": "none"});
    });
    $('.opaque-back').animate({
      opacity: '0'
    }, 500, function() {
      $('.opaque-back').css({"display": "none"});
    });
    $('#close-Modal').animate({
      opacity: '0'
    }, 500);
    $('.project').animate({
      opacity: '0'
    }, 500);
    $('.pm-title').animate({
      opacity: '0'
    }, 500);
    $('.project-manager').animate({
      opacity: '0'
    }, 500);
    $('.goal-title').animate({
      opacity: '0'
    }, 500);
    $('.goal').animate({
      opacity: '0'
    }, 500);
    $('.more-info-selector').animate({
      opacity: '0'
    }, 500);
    $("body").css("overflow", "");
  });
});
