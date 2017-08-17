$(document).ready(function() {

  var hidden = 1;
  $('.slider #sliderbtn').click( function()  {
    if(hidden === 1) {
      $('#header').show("blind", 1000);
      $('.slider').animate({ marginTop: '+'+$(this).height() }, 1000 );
      hidden = 0;
      }
    else {
      $('.slider').animate({ marginTop: '-0.5'+$(this).height()}, 1000);
      $('#header').hide("blind", 1000);
      hidden = 1;
      }
    $('.slider').find('span').toggleClass('glyphicon-menu-up');
  });

  $('.slider #sliderbtn').hover( function() {
      $('.slider').find('span').toggleClass('glyphicon-menu-down');
  });

  $('.course').click( function () {
    $(this).next().toggle();
    $(this).find('.title span').toggleClass('glyphicon-triangle-bottom');
    $(this).find('.title span').toggleClass('glyphicon-triangle-right');
  });

  $('.ptab').click(function() {
    $('.p_courses').show();
    $('.np_courses').hide();
  });

  $('.nptab').click(function() {
    $('.np_courses').show();
    $('.p_courses').hide();
  });


});
