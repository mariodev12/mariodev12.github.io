import "./style.css";

const slider = new A11YSlider(document.querySelector(".slider"), {
  centerMode: true,
  slidesToShow: 1,
  dots: false,
  prevArrow: document.querySelectorAll(".arrow-prev"),
  nextArrow: document.querySelectorAll(".arrow-next"),
  responsive: {
    375: {
      slidesToShow: 1,
      arrows: true,
    },
    768: {
      slidesToShow: 3,
      arrows: true,
    },
    1440: {
      arrows: true,
      slidesToShow: 4,
    },
  },
});
