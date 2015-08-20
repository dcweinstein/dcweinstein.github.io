$(document).ready(function() {

  var majorDown = false;
  var livingDown = false;

  $('#major').click(function() {
    if(!majorDown) {
      var windowWidth = $(window).width();
      $('.rep-majors').css({
        "display": "block",
      });
      if(windowWidth <= 625) {
        $('#living').css({
          "top": "+400px"
        });
      }
      majorDown = true;

      $('.major-img').css({
        "transform": "rotate(180deg)"
      });

    }
    else {
      $('.rep-majors').css({
        "display": "none"
      });
      var windowWidth = $(window).width();
      majorDown = false;
      if(windowWidth <= 625) {
        $('#living').css({
          "top": "0px"
        });
      }
      $('.major-img').css({
        "transform": "rotate(0deg)"
      });
    }
  });

  $('.major-choice').click(function() {
    var majorSelection = $(this).text();
    $('.major-text').html(majorSelection);
    $('.contact-faces-section').css({
      "display": "block"
    });
  });

  $('#living').click(function() {
    if(!livingDown) {
      $('.rep-living').css({
        "display": "block"
      });
      livingDown = true;

    $('.living-img').css({
      "transform": "rotate(180deg)"
    });
    }
    else {
      $('.rep-living').css({
        "display": "none"
      });
      livingDown = false;

      $('.living-img').css({
        "transform": "rotate(0deg)"
      });
    }
  });

  $('.living-choice').click(function() {
    var livingSelection = $(this).text();
    $('.living-text').html(livingSelection);
    $('.contact-faces-section').css({
      "display": "block"
    });
  });


  // Section for filling in the representatives faces-div

});
