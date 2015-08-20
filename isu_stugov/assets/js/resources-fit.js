function adjustPageTitle() {
  var splashHeight = $('.resources-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.resources-page-title').css({'top': splashHeight});
}


$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
