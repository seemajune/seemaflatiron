$( document ).ready(function() {
  $('th').css('cursor', 'pointer');

  $('th').on('click', function(e){
    var listToShow = $('.' + $(this).attr('id'));
    $(listToShow).addClass('shadow-z-1').slideToggle(1000);
  });
});