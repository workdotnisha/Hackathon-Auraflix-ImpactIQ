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
//Influencer data
const influencers = [
  {
    name: "TechReviewer",
    category: "Tech",
    avatar: "https://picsum.photos/120/120?random=400",
    subscribers: "15.2M",
    views: "2.5B",
    videos: "842",
    engagement: 92,
    growth: 78,
    impact: 88,
  },
  {
    name: "GamingPro",
    category: "Gaming",
    avatar: "https://picsum.photos/120/120?random=401",
    subscribers: "22.8M",
    views: "4.7B",
    videos: "1,254",
    engagement: 95,
    growth: 85,
    impact: 90,
  },
  {
    name: "LifestyleGuru",
    category: "Lifestyle",
    avatar: "https://picsum.photos/120/120?random=402",
    subscribers: "8.5M",
    views: "1.2B",
    videos: "678",
    engagement: 88,
    growth: 72,
    impact: 83,
  },
  {
    name: "EduTeacher",
    category: "Education",
    avatar: "https://picsum.photos/120/120?random=403",
    subscribers: "6.7M",
    views: "950M",
    videos: "412",
    engagement: 86,
    growth: 65,
    impact: 92,
  },
  {
    name: "FitnessCoach",
    category: "Lifestyle",
    avatar: "https://picsum.photos/120/120?random=404",
    subscribers: "12.3M",
    views: "1.8B",
    videos: "732",
    engagement: 89,
    growth: 76,
    impact: 85,
  },
  {
    name: "ScienceExplorer",
    category: "Education",
    avatar: "https://picsum.photos/120/120?random=405",
    subscribers: "9.1M",
    views: "1.4B",
    videos: "528",
    engagement: 91,
    growth: 68,
    impact: 94,
  },
];

// Function to create influencer cards
function createInfluencerCards() {
  const gridContainer = document.getElementById("influencersGrid");

  influencers.forEach((influencer, index) => {
    const card = document.createElement("div");
    card.className = "influencer-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
                    <div class="influencer-header">
                        <img src="${influencer.avatar}" alt="${influencer.name}" class="influencer-avatar">
                        <div class="influencer-info">
                            <h3>${influencer.name}</h3>
                            <div class="influencer-category">${influencer.category}</div>
                        </div>
                    </div>
                    <div class="influencer-stats">
                        <div class="stat">
                            <div class="stat-value">${influencer.subscribers}</div>
                            <div class="stat-label">Subscribers</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${influencer.views}</div>
                            <div class="stat-label">Views</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${influencer.videos}</div>
                            <div class="stat-label">Videos</div>
                        </div>
                    </div>
                    <div class="progress-title">
                        <span>Engagement</span>
                        <span>${influencer.engagement}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill engagement-fill" data-width="${influencer.engagement}%"></div>
                    </div>
                    <div class="progress-title">
                        <span>Growth Rate</span>
                        <span>${influencer.growth}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill growth-fill" data-width="${influencer.growth}%"></div>
                    </div>
                    <div class="progress-title">
                        <span>Impact Score</span>
                        <span>${influencer.impact}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill impact-fill" data-width="${influencer.impact}%"></div>
                    </div>
                `;

    gridContainer.appendChild(card);
  });
}

// Initialize progress bars animation
function initProgressBars() {
  const progressFills = document.querySelectorAll(".progress-fill");

  progressFills.forEach((fill) => {
    const width = fill.getAttribute("data-width");

    setTimeout(() => {
      fill.style.width = width;
    }, 300);
  });
}

// Filter functionality
function initFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".influencer-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      const filter = button.textContent;

      // Show/hide cards based on filter
      cards.forEach((card) => {
        const category = card.querySelector(".influencer-category").textContent;

        if (filter === "All" || filter === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");
  const cards = document.querySelectorAll(".influencer-card");

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      const name = card
        .querySelector(".influencer-info h3")
        .textContent.toLowerCase();
      const category = card
        .querySelector(".influencer-category")
        .textContent.toLowerCase();

      if (name.includes(searchTerm) || category.includes(searchTerm)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  });
}

// Initialize animations for elements that should animate when they come into view
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".section-title, .pricing-card, .cta-section h2, .cta-section p"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 1s ease forwards";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    observer.observe(element);
  });
}

// Animate the popular plan
function animatePopularPlan() {
  const popularCard = document.querySelector(".pricing-card:nth-child(2)");

  setInterval(() => {
    popularCard.style.animation = "pulse 2s ease";

    setTimeout(() => {
      popularCard.style.animation = "";
    }, 2000);
  }, 5000);
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createInfluencerCards();
  setTimeout(initProgressBars, 500);
  initFilters();
  initSearch();
  initScrollAnimations();
  animatePopularPlan();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    });
  });
});
