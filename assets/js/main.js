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
  if (window.location.pathname === "/") {
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

    $('#video-link').on('click', function() {
      $('.wistia_embed a')[0].click();
    });
  }

  if (window.location.pathname !== "/") {
    // Vimeo Popup
    $('.popup-vimeo').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,
     fixedContentPos: false
    });
  }


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

  // Switch sign-up to dashboard if logged in
  if (Cookies.get('timber_logged_in') === "true") {
    $('.site-wrapper nav > .w-75-l > a:last-of-type')
      .text('Dashboard →');
  }

  // Make post headers linkable
  $('.post h2,h3,h4,h5,h6').filter('[id]').each(function () {
    $(this).html('<a href="#'+$(this).attr('id')+'" class="heading-anchor"><i class="fa fa-link" aria-hidden="true"></i>' + $(this).text() + '</a>');
  });
});