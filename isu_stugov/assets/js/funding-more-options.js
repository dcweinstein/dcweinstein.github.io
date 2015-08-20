$(document).ready(function() {
  var active = 0;

  fixAboutHeight();

  function goToRequestDown () {
    $('.funding-request-main').css({
      "top": "0",
      "display": "block",
      "position": "relative",
      "z-index": "98"
    });
    $('.funding-about-main').animate({
      height: '0'
    }, 600, function() {
      $('.funding-about-main').css({
        "display": "none"
      });
      active = 1;
      fixRequestHeight();
    });
  }

  function goToOptions() {
    $('.funding-options-main').css({
      "top": "0",
      "display": "block",
      "position": "relative",
      "z-index": "98"
    });
    $('.go-to-more-options').css({
      "position": "fixed",
      "z-index": "97"
    });
    $('.funding-request-main').animate({
      height: '0'
    }, 600, function() {
      $('.funding-request-main').css({
        "display": "none"
      });
      active = 2;
      fixOptionsHeight();
    });
  }

  function goToRequestUp() {
    $('.funding-request-main').css({
      "display": "block"
    });
    $('.funding-request-main').animate({
      height: '100%'
    }, 500, function() {
      $('.go-to-more-options').css({
        "position": "relative"
      });
      $('.funding-options-main').css({
        "display": "none"
      });
      active = 1;
      fixRequestHeight();
    });
  }

  function goToAbout() {
    $('.funding-about-main').css({
      "display": "block"
    });
    $('.funding-about-main').animate({
      height: '100%'
    }, 500, function() {
      $('.go-to-request').css({
        "position": "relative"
      });
      $('.funding-request-main').css({
        "display": "none"
      });
      active = 0;
      fixAboutHeight();
    });
  }

  $('.go-to-request-abt').click(function() {
    goToRequestDown();
  });
  $('.go-to-more-options-abt').click(function() {
    goToRequestDown();
    goToOptions();
  });
  $('.go-to-about-req').click(function() {
    goToAbout();
  });
  $('.go-to-more-options-req').click(function() {
    goToOptions();
  });
  $('.go-to-about-opt').click(function() {
    goToRequestUp();
    goToAbout();
  });
  $('.go-to-request-opt').click(function() {
    goToRequestUp();
  });
  $('.go-to-request-abt-small').click(function() {
    goToRequestDown();
  });
  $('.go-to-more-options-abt-small').click(function() {
    goToRequestDown();
    goToOptions();
  });
  $('.go-to-about-req-small').click(function() {
    goToAbout();
  });
  $('.go-to-more-options-req-small').click(function() {
    goToOptions();
  });
  $('.go-to-about-opt-small').click(function() {
    goToRequestUp();
    goToAbout();
  });
  $('.go-to-request-opt-small').click(function() {
    goToRequestUp();
  });

  $(window).resize(function() {
    switch (active) {
      case 0:
        fixAboutHeight();
        break;
      case 1:
        fixRequestHeight();
        break;
      case 2:
        fixOptionsHeight();
        break;
      default:
        fixAboutHeight();
    }
  });
});

function fixAboutHeight() {
  var neededAboutHeight = $('.about-content-container').height();
  neededAboutHeight += 80;

  $('.funding-about-main').css({
    "height": neededAboutHeight
  });
}

function fixRequestHeight() {
  var neededRequestHeight = $('.request-content-container').height();
  neededRequestHeight += 85;

  $('.funding-request-main').css({
    "height": neededRequestHeight
  });
}

function fixOptionsHeight() {
  var neededOptionsHeight = $('.more-options-links').height();
  neededOptionsHeight += 190;

  $('.funding-options-main').css({
    "height": neededOptionsHeight
  });
}
