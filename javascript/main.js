$( document ).ready(function() {
    $('th').on('click touchstart', function(e){
      var listToShow = $('.' + $(this).attr('id'));
      $(listToShow).toggle('hide-list');
    });
});