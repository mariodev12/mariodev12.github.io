import "./style.css";

const slider = new A11YSlider(document.querySelector(".slider"), {
  centerMode: true,
  slidesToShow: 1,
  dots: false,
  prevArrow: document.querySelectorAll(".arrow-prev"),
  nextArrow: document.querySelectorAll(".arrow-next"),
  responsive: {
    768: {
      slidesToShow: 3,
      arrows: true,
    },
    960: {
      slidesToShow: 3,
      arrows: true, // slider disabled 960px to 1279px
    },
    1280: {
      arrows: true,
      slidesToShow: 4,
    },
  },
});
