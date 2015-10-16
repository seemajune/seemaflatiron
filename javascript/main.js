$( document ).ready(function() {
  $('th').css('cursor', 'pointer');

  $('th').on('click touchstart', function(e){
    var listToShow = $('.' + $(this).attr('id'));
    $(listToShow).toggle('hide-list').addClass('shadow-z-1');
  });
});