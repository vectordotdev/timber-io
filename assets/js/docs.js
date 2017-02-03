$(function (){
    
    // Handle expanding/collapsiing list items
    $('li').click(function(e) {
      e.stopPropagation();
      $(this).children('ul').toggle();
    });

});