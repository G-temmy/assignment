const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const closeMenu = () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
};

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("active")) {
    closeMenu();
  }
});

const typed = new Typed(".multiple", {
  strings: [
    "Frontend Developer",
    "Web Designer",
    "Problem Solver",
    "Backend Developer",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});
