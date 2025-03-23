//Navbar
// Select elements
const menuToggle = document.querySelector(".menu-toggle");
const items = document.querySelector(".items");

// Toggle menu on click
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  items.classList.toggle("show");
});

menuToggle.addEventListener("click", () => {
  menuToggle.remove.toggle("active");
  items.remove.toggle("show");
});

// Loading Animation
document.addEventListener("DOMContentLoaded", function () {
  const progress = document.getElementById("progress");
  const loadingScreen = document.getElementById("loading-screen");
  let width = 0;

  const interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(function () {
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
          loadingScreen.style.display = "none";
        }, 500);
      }, 500);
    } else {
      width += Math.floor(Math.random() * 10) + 1;
      if (width > 100) width = 100;
      progress.style.width = width + "%";
    }
  }, 200);

  // Scroll header effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Animation on scroll
  const animateElements = document.querySelectorAll(".animate-in");

  function checkIfInView() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", checkIfInView);
  setTimeout(checkIfInView, 1000); // Initial check

  // Animate chart bars
  const chartBars = document.querySelectorAll(".chart-bar");
  setTimeout(function () {
    chartBars.forEach((bar) => {
      const originalHeight = bar.style.height;
      bar.style.height = "0%";
      setTimeout(() => {
        bar.style.height = originalHeight;
      }, 100);
    });
  }, 2500);
});
