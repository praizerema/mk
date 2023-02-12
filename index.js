{
  /* <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script> */
}
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

const carousel = document.querySelector("#carousel");
const slides = carousel.querySelectorAll(".slides .slide");
// const prev = carousel.querySelector('#prev');
// const next = carousel.querySelector('#next');
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
// indicator.
slides[counter].style.display = "block";
indicators.children[counter].classList.add("active");

// indicatorList[counter].classList.add('active')
// next.addEventListener('click', () => {
//   slides[counter].style.display = 'none';
// indicators.children[counter].classList.remove("active")
//   counter = (counter + 1) % slides.length;
//   slides[counter].style.display = 'block';
// indicators.children[counter].classList.add("active")

// });
setInterval(() => {
  slides[counter].style.display = "none";
  slides[counter].classList.remove('fadeIn');
  indicators.children[counter].classList.remove("active");
  counter = (counter + 1) % slides.length;
  slides[counter].style.display = "block";
  slides[counter].classList.add('fadeIn');
  indicators.children[counter].classList.add("active");
}, 3500);

// prev.addEventListener('click', () => {
//   slides[counter].style.display = 'none';
// indicators.children[counter].classList.remove("active")
//   counter = (counter - 1 + slides.length) % slides.length;
//   slides[counter].style.display = 'block';
//   indicators.children[counter].classList.add("active")

// });
