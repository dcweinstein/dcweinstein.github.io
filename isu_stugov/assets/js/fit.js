$(document).ready(function() {
  var totalHeight = $('.splash-img').height();
  totalHeight = totalHeight + 80;

  var viewPortHeight = $(window).height();
  if(totalHeight > viewPortHeight) {
    var newHeight = viewPortHeight - 80;
    var heightChange = totalHeight - newHeight;
    newHeight = newHeight + "px";
    var socialChange = $('.social-icons').position().top;
    socialChange = socialChange - heightChange + 80;
    socialChange = socialChange + 'px';
    $('.splash-img').css({"height": newHeight});
    $('.social-icons').css({"top": socialChange});
  }
});
