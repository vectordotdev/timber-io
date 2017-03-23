$(function () {
  $('.post h2,h3,h4,h5,h6').filter('[id]').each(function () {
    $(this).html('<a href="#'+$(this).attr('id')+'" class="heading-anchor"><i class="fa fa-link" aria-hidden="true"></i>' + $(this).text() + '</a>');
  });
});