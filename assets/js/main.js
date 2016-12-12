(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);


/* Mobile menu */

$('.nav-toggle').on('click', function() {
  // this === nav-toggle
  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $('.nav__links').removeClass('is-active');
  } else {
    $(this).addClass('is-active');
    $('.nav__links').addClass('is-active');
  }
});