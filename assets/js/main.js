$(function () {
  
  const $demoCarousel = $(".home__demo__carousel__content").slick({
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: "",
    prevArrow: ""
  });

  $('.home__demo__carousel__nav button').on('click', function() {
    $demoCarousel.slick('slickGoTo', $(this).index());
    $(this).parent().find('.bg-dark-purple').removeClass('bg-dark-purple');
    $(this).addClass('bg-dark-purple');
    $(this).find('span').first().addClass('bg-purple');
  });
});

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