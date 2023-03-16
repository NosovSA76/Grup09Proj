$('.responsive').slick({
  // dots: true,
  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 3,
  variableWidth: true, // обовязково додається, щоб частина картки заходило за вьюпорт

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const mySlickBlog = document.querySelector('.slick-track');
const mySlickNext = document.querySelector('.my-slick-next');
let intervalId;

mySlickBlog.addEventListener('mouseover', () => {
  intervalId = setInterval(() => {
    mySlickNext.click();
  }, 1000);
})

mySlickBlog.addEventListener('mouseout', () => {
  clearInterval(intervalId);
});

// setInterval(() => {
//   mySlickNext.click();
// }, 3000);

