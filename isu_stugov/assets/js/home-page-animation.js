$(document).ready(function() {
  // This section has functions for display opaque layer over meet-us faces
  var animated = false;
  $(".layer").hover(function(){
    if(!animated) {
      $(this).animate({
        opacity: '.5'
      }, 500);
      $(this).parent().next().animate({
        opacity: '1'
      }, 500);
      $(this).parent().next().next().animate({
        opacity: '1'
      }, 500);
      animated = true;
    }
  });
  $(".layer").mouseout(function() {
    if(animated) {
      var isHoverName = $('.meet-us-img-div').find("name:hover").length;
      console.log("this: " + isHoverPT);
      var isHoverPT = $('.meet-us-img-div').find("positionTitle:hover").length;
      if(!isHoverName && !isHoverPT) {
        $(this).animate({
          opacity: '0'
        }, 500);
        $(this).parent().next().animate({
          opacity: '0'
        }, 500);
        $(this).parent().next().next().animate({
          opacity: '0'
        }, 500);
        animated = false;
      }
    }
  });

  // This section has functions for displaying the more-info drop down
  var clicked = false;
  $("#layer4").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#name4").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#position4").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });

  $("#layer3").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#name3").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#position3").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });

  $("#layer2").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#name2").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#position2").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });

  $("#layer1").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#name1").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
  $("#position1").click(function() {
    var currentHeight = $("#meetus").height();
    if(!clicked) {
      currentHeight = currentHeight + 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "block"});
      clicked = true;
    }
    else {
      currentHeight = currentHeight - 640;
      $("#meetus").animate({
        height: currentHeight + "px"
      }, 500);
      $("#img4").css({"display": "none"});
      $("#img3").css({"display": "none"});
      $("#img2").css({"display": "none"});
      $("#img1").css({"display": "none"});
      clicked = false;
    }
  });
});
