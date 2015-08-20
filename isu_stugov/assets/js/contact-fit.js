function adjustPageTitle() {
  var splashHeight = $('.contact-splash').height();
  splashHeight -= 70;
  splashHeight += 'px';
  $('.contact-page-title').css({'top': splashHeight});
}

$(document).ready(adjustPageTitle);
$(window).resize(adjustPageTitle);
