$(function () {

  var highlightActiveButton = function(el) {
    // Remove other dark classes
    $(el).parent().find('.bg-dark-purple').removeClass('bg-dark-purple').addClass('bg-paua');

    // Make this button active
    $(el).addClass('bg-dark-purple');

    // Remove active state from number circle
    $(el).parent().find('.bg-purple').removeClass('bg-purple').addClass('bg-midnight');

    // Make this button's circle active
    $(el).find('.bg-midnight').removeClass('bg-midnight').addClass('bg-purple');
  }
  
  // Initialize the carousel
  var $demoCarousel = $(".home__demo__carousel__content").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: "",
    prevArrow: ""
  });

  // Highlight selected carousel button when it changes
  $demoCarousel.on('afterChange', function(event, slick, currentSlide) {
    var buttonToHighlight = $('.home__demo__carousel__nav button').eq(currentSlide)[0];
    highlightActiveButton(buttonToHighlight);
  })

  // Handle explicit carousel selection
  $('.home__demo__carousel__nav button').on('click', function() {
    $demoCarousel.slick('slickGoTo', $(this).index());
    highlightActiveButton(this);
  });

  // Make the first button active
  $('.home__demo__carousel__nav button').first().click();

  // Homepage video button
  $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
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