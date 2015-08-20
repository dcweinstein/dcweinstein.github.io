function adjustPageTitle() {
  var windowWidth = $(window).width();
  var splashHeight = $('.meet-splash').height();
  splashHeight -= 70;
  if(windowWidth <= 540) {
    splashHeight += 20;
  }
  if(windowWidth <= 540) {
    splashHeight += 10;
  }
  splashHeight += 'px';
  $('.meetus-page-title').css({'top': splashHeight});
}

$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
