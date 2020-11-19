$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
  });
});
