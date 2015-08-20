function adjustPageTitle() {
  var splashHeight = $('.elections-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.elections-page-title').css({'top': splashHeight});
}

$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
