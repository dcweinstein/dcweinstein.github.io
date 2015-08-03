$(document).ready(function() {
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


});
