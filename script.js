let index = 0;
const slides = document.querySelectorAll(".banner img");

function showSlide() {
  slides.forEach((img, i) => img.classList.toggle("active", i === index));
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);
