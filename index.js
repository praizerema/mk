function displaymenu() {
  let navItem = document.getElementById("mobile-nav-items");
  if (navItem.className === "responsive-nav-none") {
    navItem.classList.remove("responsive-nav-none");
    navItem.classList.add("responsive-nav");
  } else {
    navItem.classList.remove("responsive-nav");
    navItem.classList.add("responsive-nav-none");
  }
}

// Script for hero section slide
const carousel = document.querySelector("#carousel");
const slides = carousel.querySelectorAll(".slides .slide");
const indicators = carousel.querySelector(".indicators");
const indicatorList = carousel.querySelectorAll(".indicators div");

let counter = 0;
for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement("div");
  indicator.innerText = ``;
  indicators.appendChild(indicator);
  indicator.addEventListener;

  indicator.addEventListener("click", () => {
    slides[counter].style.display = "none";
  slides[counter].classList.remove('fadeIn');
    indicators.children[counter].classList.remove("active");
    indicators.children[counter].classList.remove("active");
    slides[i].style.display = "block";
  slides[counter].classList.add('fadeIn');
    indicators.children[i].classList.add("active");
  });
}
slides[counter].style.display = "block";
indicators.children[counter].classList.add("active");

setInterval(() => {
  slides[counter].style.display = "none";
  slides[counter].classList.remove('fadeIn');
  indicators.children[counter].classList.remove("active");
  counter = (counter + 1) % slides.length;
  slides[counter].style.display = "block";
  slides[counter].classList.add('fadeIn');
  indicators.children[counter].classList.add("active");
}, 3500);


// Script for testimonial section slide

const testimonialCarousel = document.querySelector("#testimonial-carousel");
const testimonialSlides = testimonialCarousel.querySelectorAll(".testimonial-slides .testimonial-slide");
const prev = testimonialCarousel.querySelector('#prev');
const next = testimonialCarousel.querySelector('#next');

let counts = 0;

testimonialSlides[counts].style.display = "block";
next.addEventListener('click', () => {
  testimonialSlides[counts].style.display = 'none';
  counts = (counts + 1) % testimonialSlides.length;
  testimonialSlides[counts].style.display = 'block';

});

setInterval(() => {
  testimonialSlides[counts].style.display = "none";
  testimonialSlides[counts].classList.remove('fadeIn');
  counts = (counts + 1) % testimonialSlides.length;
  testimonialSlides[counts].style.display = "block";
  testimonialSlides[counts].classList.add('fadeIn');
}, 3500);

prev.addEventListener('click', () => {
  testimonialSlides[counts].style.display = 'none';
  testimonialSlides[counts].classList.remove('fadeIn');
  counts = (counts - 1 + testimonialSlides.length) % testimonialSlides.length;
  testimonialSlides[counts].style.display = 'block';
  testimonialSlides[counts].classList.add('fadeIn');

});
