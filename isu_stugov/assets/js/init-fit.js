function adjustPageTitle() {
  var splashHeight = $('.init-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.init-page-title').css({'top': splashHeight});
}

$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
