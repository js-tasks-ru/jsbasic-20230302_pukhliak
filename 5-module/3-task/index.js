function initCarousel() {
  const carousel = document.querySelector(".carousel__inner");

  const carouselSlide = document.querySelectorAll(".carousel__slide");

  const carouselWidth = carousel.offsetWidth;

  const carouselArrowRight = document.querySelector(".carousel__arrow_right");

  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");

  let currentTransformValue = 0;
  let currentCarouselIndex = 0;

  carouselArrowLeft.style.display = "none";

  console.log(carouselSlide);
  console.dir(carouselSlide);
  console.log(carouselSlide.length - 1);

  carouselArrowRight.addEventListener("click", () => {
    currentTransformValue = currentTransformValue - carouselWidth;
    carousel.style.transform = `translateX(${currentTransformValue}px)`;
    currentCarouselIndex = currentCarouselIndex + 1;
    if (carouselSlide.length - 1 === currentCarouselIndex) {
      carouselArrowRight.style.display = "none";
    } else {
      carouselArrowRight.style.display = "";
    }
    if (currentCarouselIndex === 0) {
      carouselArrowLeft.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
    }
  });

  carouselArrowLeft.addEventListener("click", () => {
    currentTransformValue = currentTransformValue + carouselWidth;
    carousel.style.transform = `translateX(${currentTransformValue}px)`;
    currentCarouselIndex = currentCarouselIndex - 1;
    if (carouselSlide.length - 1 === currentCarouselIndex) {
      carouselArrowRight.style.display = "none";
    } else {
      carouselArrowRight.style.display = "";
    }
    if (currentCarouselIndex === 0) {
      carouselArrowLeft.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
    }
  });
}
