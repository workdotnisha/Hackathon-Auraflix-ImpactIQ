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
document.addEventListener("DOMContentLoaded", function () {
  // Initialize progress bars
  const progressBars = document.querySelectorAll(".progress-value");
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 300);
  });

  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and content
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Show corresponding content
      const tabId = tab.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all filter buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Filter logic would go here
      const category = button.textContent;
      filterInfluencers(category);
    });
  });

  // Search functionality
  const searchInput = document.querySelector(".search-box input");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    searchInfluencers(searchTerm);
  });

  // Mock chart data for analytics tab
  if (document.getElementById("analytics")) {
    renderAnalyticsCharts();
  }

  // Influencer card hover effects
  const influencerCards = document.querySelectorAll(".influencer-card");

  influencerCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});

// Function to filter influencers by category
function filterInfluencers(category) {
  const cards = document.querySelectorAll(".influencer-card");
  const rows = document.querySelectorAll(".influencer-row");

  if (category === "All Categories") {
    // Show all cards and rows
    cards.forEach((card) => (card.style.display = "block"));
    rows.forEach((row) => (row.style.display = "grid"));
    return;
  }

  // Filter cards
  cards.forEach((card) => {
    const cardCategory = card.querySelector(".influencer-category").textContent;
    if (cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Filter rows
  rows.forEach((row) => {
    const rowCategory = row.querySelector(".influencer-info p").textContent;
    if (rowCategory === category) {
      row.style.display = "grid";
    } else {
      row.style.display = "none";
    }
  });
}

// Function to search influencers
function searchInfluencers(searchTerm) {
  const cards = document.querySelectorAll(".influencer-card");
  const rows = document.querySelectorAll(".influencer-row");

  if (searchTerm === "") {
    // Show all cards and rows
    cards.forEach((card) => (card.style.display = "block"));
    rows.forEach((row) => (row.style.display = "grid"));
    return;
  }

  // Search in cards
  cards.forEach((card) => {
    const name = card
      .querySelector(".influencer-name")
      .textContent.toLowerCase();
    const category = card
      .querySelector(".influencer-category")
      .textContent.toLowerCase();

    if (name.includes(searchTerm) || category.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Search in rows
  rows.forEach((row) => {
    const name = row
      .querySelector(".influencer-info h4")
      .textContent.toLowerCase();
    const category = row
      .querySelector(".influencer-info p")
      .textContent.toLowerCase();

    if (name.includes(searchTerm) || category.includes(searchTerm)) {
      row.style.display = "grid";
    } else {
      row.style.display = "none";
    }
  });
}

// Mock analytics tab rendering
function renderAnalyticsCharts() {
  // This would be replaced with actual chart library code
  // For example, using Chart.js or D3.js
  const analyticsTab = document.getElementById("analytics");

  if (!analyticsTab) {
    // Create analytics tab content if it doesn't exist
    const tabContent = document.createElement("div");
    tabContent.id = "analytics";
    tabContent.className = "tab-content";

    // Add metric cards
    tabContent.innerHTML = `
    <div class="metric-cards">
        <div class="metric-card">
            <div class="metric-label">Average Subscribers</div>
            <div class="metric-value">47.2M</div>
            <div class="metric-trend up">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
                12.4%
            </div>
        </div>
        <div class="metric-card">
            <div class="metric-label">Total Views</div>
            <div class="metric-value">65B</div>
            <div class="metric-trend up">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
                8.7%
            </div>
        </div>
        <div class="metric-card">
            <div class="metric-label">Avg. Engagement</div>
            <div class="metric-value">7.8</div>
            <div class="metric-trend down">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
                2.1%
            </div>
        </div>
        <div class="metric-card">
            <div class="metric-label">Avg. Impact Score</div>
            <div class="metric-value">83%</div>
            <div class="metric-trend up">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
                5.3%
            </div>
        </div>
    </div>
    
    <div class="chart-container">
        <div class="chart-header">
            <div class="chart-title">Subscriber Growth Trends</div>
            <div class="chart-actions">
                <button class="filter-btn active">Last 30 Days</button>
                <button class="filter-btn">Last 90 Days</button>
                <button class="filter-btn">Last Year</button>
            </div>
        </div>
        <div class="chart-wrapper" id="subscriberChart">
            <p style="text-align: center; padding-top: 120px; color: var(--text-secondary);">
                Chart visualization would be rendered here using a library like Chart.js or D3.js
            </p>
        </div>
    </div>
    
    <div class="chart-container">
        <div class="chart-header">
            <div class="chart-title">Category Performance</div>
            <div class="chart-actions">
                <button class="filter-btn active">All Metrics</button>
                <button class="filter-btn">Subscribers</button>
                <button class="filter-btn">Engagement</button>
            </div>
        </div>
        <div class="chart-wrapper" id="categoryChart">
            <p style="text-align: center; padding-top: 120px; color: var(--text-secondary);">
                Category comparison chart would be rendered here
            </p>
        </div>
    </div>
`;

    document.querySelector(".container").appendChild(tabContent);

    // Attach event listeners to new filter buttons
    const newFilterButtons = tabContent.querySelectorAll(".filter-btn");
    newFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const parentActions = button.closest(".chart-actions");
        parentActions.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
  }
}

// Sort functionality (could be expanded)
function sortInfluencers(criteria, ascending = true) {
  // This would sort the influencers based on different criteria
  // Like subscribers, views, engagement, etc.
  console.log("Sorting by:", criteria, ascending ? "ascending" : "descending");
}

// Add event listeners for the "View Profile" and "Analyze" buttons
document.querySelectorAll(".btn-outline, .btn-text").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".influencer-card");
    const influencerName = card.querySelector(".influencer-name").textContent;

    if (this.textContent === "View Profile") {
      alert(`Viewing profile for ${influencerName}`);
      // This would navigate to the influencer's profile page
    } else if (this.textContent === "Analyze") {
      alert(`Analyzing ${influencerName}'s performance`);
      // This would show an analysis popup or navigate to an analysis page
    }
  });
});

// Add animation for page scroll
window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".influencer-card");
  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Function to get random data for charts
function getRandomData(count, min, max) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}
