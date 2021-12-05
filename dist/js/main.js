$(document).ready(function () {
  $('.slider-profiles .slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.slider-profiles .prev-arrow'),
    nextArrow: $('.slider-profiles .next-arrow'),

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




  const optionsSlickPartners = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: $('.slider-partners .prev-arrow'),
    nextArrow: $('.slider-partners .next-arrow'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  }
  $('.slider-partners .slider').slick(optionsSlickPartners);




  // $('.slider-testimonial .slider').slick({
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: "unslick"
  //     }
  //   ]
  // });


  const optionsSlickScroll = {
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.slider-scroll .prev-arrow'),
    nextArrow: $('.slider-scroll .next-arrow'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  };

  $('.gallery .slider-scroll .slider').slick(optionsSlickScroll);



  const optionsTestimonialsSlickScroll = {
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  };


  $('.testimonials-section .slider-scroll .slider').slick(optionsTestimonialsSlickScroll);


  sliderIsLive = true;
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      $('.slider-partners .slider').slick('unslick');
      $('.gallery .slider-scroll .slider').slick('unslick');
      $('.testimonials-section .slider-scroll .slider').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (!sliderIsLive) {
        $('.slider-partners .slider').slick(optionsSlickPartners);
        $('.gallery .slider-scroll .slider').slick(optionsSlickScroll);
        $('.testimonials-section .slider-scroll .slider').slick();
        sliderIsLive = true;
      }
    }
  });




  $('aside .widget-title').click(function () {
    $(this).next('.widget-menu').toggle();
    $(this).toggleClass('navbar-toggler-close')
  })

});



const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerClose = document.querySelector('.navbar-toggler-close');
navbarToggler.addEventListener('click', (e) => {
  e.preventDefault();
  navbarToggler.nextElementSibling.classList.add('open-menu');
  document.body.classList.add('open-menu');
});
navbarTogglerClose.addEventListener('click', (e) => {
  e.preventDefault();
  navbarToggler.nextElementSibling.classList.remove('open-menu');
  document.body.classList.remove('open-menu');
});

$('.more-link').click(function (e) {
  e.preventDefault();
  $('.more-link').next().removeClass('d-none')
  $('.more-link').hide()
})



$('.op+button').click(function () {
  $('.op').toggle()
})