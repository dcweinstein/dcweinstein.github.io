$(document).ready(function() {
  var currentPleat = 0;
  var aboutHeight = $('.about-elections').height();
  var commissionHeight = $('.election-commission').height();
  var howToHeight = $('.how-to-run').height();

  function downToCommission() {
    $('.election-commission').css({
      "display": "block"
    });
    $('.about-elections').animate({
      height: "0px"
    }, 650, function() {
      $('.about-elections').css({
        "display": "none"
      });
    });
    currentPleat = 1;
  }

  function toAbout() {
    $('.about-elections').css({
      "display": "block"
    });
    $('.about-elections').animate({
      height: aboutHeight
    }, 650);
    $('.election-commission').animate({
      height: "0px"
    }, 650, function() {
      $('.election-commission').css({
        "display": "none",
        "height": commissionHeight
      });
    });
    currentPleat = 0;
  }

  function toHowTo() {
    $('.how-to-run').css({
      "display": "block"
    });
    $('.election-commission').animate({
      height: "0px"
    }, 650, function() {
      $('.election-commission').css({
        "display": "none"
      });
    });
    currentPleat = 2;
  }

  function upToCommission() {
    $('.election-commission').css({
      "display": "block"
    });
    $('.election-commission').animate({
      height: commissionHeight
    }, 650);
    $('.how-to-run').animate({
      height: "0px"
    }, 650, function() {
      $('.how-to-run').css({
        "display": "none",
        "height": howToHeight
      });
    });
    currentPleat = 1;
  }

  $('.ae-selector').click(function() {
    if(currentPleat === 1) {
      toAbout();
    }
    else if(currentPleat === 2) {
      upToCommission();
      setTimeout(toAbout, 300);
    }
  });

  $('.ec-selector').click(function() {
    if(currentPleat === 0) {
      downToCommission();
    }
    else if(currentPleat === 2) {
      upToCommission();
    }
  });

  $('.htr-selector').click(function() {
    if(currentPleat === 0) {
      downToCommission();
      setTimeout(toHowTo, 300);
    }
    else if(currentPleat === 1) {
      toHowTo();
    }
  });
});
