$(function () {

    // // Collapse lists on load
    // $('.docs__navigation ul').toggle();

    // // Handle expanding/collapsiing list items
    // $('.docs__navigation h3').click(function(e) {
    //   e.stopPropagation();
    //   $(this).parent().children('ul').toggle();
    // });

    $('.markdown-body h2,h3,h4,h5,h6').filter('[id]').each(function () {
      $(this).html('<a href="#'+$(this).attr('id')+'" class="heading-anchor"><i class="fa fa-link" aria-hidden="true"></i>' + $(this).text() + '</a>');
    });

    $('a.chat').on('click', function() {
      window.Intercom('showNewMessage');
      return false;
    });

    $('.docs__navigation section a.header').on('click', function() {
      $(this).parent().toggleClass('expanded');
      return false;
    })
});