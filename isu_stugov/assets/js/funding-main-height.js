$(document).ready(function() {
  var active = 0;

  fixAboutHeight();

  $('.go-to-request-abt').click(function() {
    active = 1;
    fixRequestHeight();
  });
  $('.go-to-request-opt').click(function() {
    active = 1;
    fixRequestHeight();
  });
  $('.go-to-more-options-abt').click(function() {
    active = 2;
    fixOptionsHeight();
  });
  $('.go-to-more-options-req').click(function() {
    active = 2;
    fixOptionsHeight();
  });
  $('.go-to-about-req').click(function() {
    active = 0;
    fixAboutHeight();
  });
  $('.go-to-about-opt').click(function() {
    active = 0;
    fixAboutHeight();
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
  neededAboutHeight += 70;

  $('.funding-about-main').css({
    "height": neededAboutHeight
  });
}

function fixRequestHeight() {
  var neededRequestHeight = $('.request-content-container').height();
  neededRequestHeight += 20;

  $('.funding-request-main').css({
    "height": neededRequestHeight
  });
}

function fixOptionsHeight() {
  var neededOptionsHeight = $('.more-options-links').height();
  neededOptionsHeight += 100;

  $('.funding-options-main').css({
    "height": neededOptionsHeight
  });
}
