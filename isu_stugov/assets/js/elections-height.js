$(document).ready(function(){
  var neededHeight = $('.need-height').height();
  neededHeight += 10;

  var currentHeight = $('.elections-content').height();

  if(neededHeight > currentHeight) {

    $('.elections-content').css({
      "height": neededHeight
    });
  }
});
