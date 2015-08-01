$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);

function adjustPageTitle() {
  var splashHeight = $('.init-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.init-page-title').css({'top': splashHeight});
}
