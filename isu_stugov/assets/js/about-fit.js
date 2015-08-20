function adjustPageTitle() {
  var splashHeight = $('.about-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.about-page-title').css({'top': splashHeight});
}

$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
