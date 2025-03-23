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

// Animation for engagement bars
function animateEngagementBars() {
  const engagementFills = document.querySelectorAll(".engagement-fill");

  engagementFills.forEach((fill) => {
    const width = fill.getAttribute("data-width");
    setTimeout(() => {
      fill.style.width = width;
    }, 300);
  });
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-fadeIn").forEach((element) => {
    observer.observe(element);
  });
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  animateEngagementBars();
  setupScrollAnimations();

  // Add hover effect for ranking cards
  const rankingCards = document.querySelectorAll(".ranking-card");
  rankingCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 10px 30px rgba(138, 79, 255, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });

  // Add pulse animation to View All button
  const viewAllBtn = document.querySelector(".view-all-btn");
  viewAllBtn.classList.add("animate-pulse");
});
