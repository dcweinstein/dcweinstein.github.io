function adjustPageTitle() {
  var splashHeight = $('.funding-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.funding-page-title').css({'top': splashHeight});
}


$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
