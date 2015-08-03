$(document).ready(function() {
  $('.afbutton').click(function() {
    $('.l').css({'display': 'block'});
    $('.e').css({'display': 'block'});
    $('.j').css({'display': 'block'});
  });
  $('.lfbutton').click(function() {
    $('.l').css({'display': 'block'});
    $('.e').css({'display': 'none'});
    $('.j').css({'display': 'none'});
  });
  $('.efbutton').click(function() {
    $('.l').css({'display': 'none'});
    $('.e').css({'display': 'block'});
    $('.j').css({'display': 'none'});
  });
  $('.jfbutton').click(function() {
    $('.l').css({'display': 'none'});
    $('.e').css({'display': 'none'});
    $('.j').css({'display': 'block'});
  });
});
