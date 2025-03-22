
// Influencer data
const influencers = [
    {
        id: 1,
        name: "TechReviewPro",
        category: "tech",
        subscribers: 15.7,
        monthlyViews: 45.2,
        engagement: 92,
        growth: 78,
        influence: 87,
        description: "In-depth tech reviews and industry insights.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 2,
        name: "LifeStyleHub",
        category: "lifestyle",
        subscribers: 12.3,
        monthlyViews: 38.9,
        engagement: 85,
        growth: 90,
        influence: 79,
        description: "Daily tips for a better lifestyle and wellness.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 3,
        name: "GamingMasters",
        category: "gaming",
        subscribers: 18.5,
        monthlyViews: 62.4,
        engagement: 95,
        growth: 82,
        influence: 93,
        description: "Professional gameplay and latest game reviews.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 4,
        name: "BeautyTrends",
        category: "beauty",
        subscribers: 10.8,
        monthlyViews: 32.6,
        engagement: 88,
        growth: 86,
        influence: 81,
        description: "Makeup tutorials and beauty product reviews.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 5,
        name: "CodeWithMe",
        category: "tech",
        subscribers: 14.2,
        monthlyViews: 41.5,
        engagement: 90,
        growth: 85,
        influence: 84,
        description: "Programming tutorials and developer stories.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 6,
        name: "TravelEverywhere",
        category: "lifestyle",
        subscribers: 11.6,
        monthlyViews: 35.8,
        engagement: 87,
        growth: 89,
        influence: 82,
        description: "Travel vlogs and destination guides.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 7,
        name: "EsportsDaily",
        category: "gaming",
        subscribers: 16.9,
        monthlyViews: 58.3,
        engagement: 93,
        growth: 80,
        influence: 91,
        description: "Esports news, tournaments and player interviews.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 8,
        name: "SkincareSolutions",
        category: "beauty",
        subscribers: 9.7,
        monthlyViews: 28.4,
        engagement: 84,
        growth: 88,
        influence: 76,
        description: "Skincare routines and product recommendations.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 9,
        name: "FutureOfTech",
        category: "tech",
        subscribers: 13.5,
        monthlyViews: 39.7,
        engagement: 89,
        growth: 83,
        influence: 85,
        description: "AI, robotics and future technology explorations.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 10,
        name: "FitLifeJourney",
        category: "lifestyle",
        subscribers: 10.9,
        monthlyViews: 32.2,
        engagement: 86,
        growth: 91,
        influence: 80,
        description: "Fitness workouts and nutrition guides.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 11,
        name: "RetroGaming",
        category: "gaming",
        subscribers: 12.8,
        monthlyViews: 40.6,
        engagement: 88,
        growth: 79,
        influence: 84,
        description: "Classic games and retro gaming nostalgia.",
        imageUrl: "/api/placeholder/400/320"
    },
    {
        id: 12,
        name: "GlamSquad",
        category: "beauty",
        subscribers: 8.6,
        monthlyViews: 25.1,
        engagement: 82,
        growth: 85,
        influence: 75,
        description: "Celebrity makeup looks and fashion trends.",
        imageUrl: "/api/placeholder/400/320"
    }
];

// Sort influencers by subscribers (descending)
influencers.sort((a, b) => b.subscribers - a.subscribers);

// Render influencer cards
const influencerGrid = document.getElementById('influencerGrid');

function renderCards(filter = 'all') {
    influencerGrid.innerHTML = '';
    
    const filteredInfluencers = filter === 'all' 
        ? influencers 
        : influencers.filter(inf => inf.category === filter);
    
    filteredInfluencers.forEach((influencer, index) => {
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.classList.add('influencer-card');
        card.style.animationDelay = `${delay}s`;
        
        card.innerHTML = `
            <div class="card-img">
                <img src="${influencer.imageUrl}" alt="${influencer.name}">
                <span class="ranking">${index + 1}</span>
            </div>
            <div class="card-content">
                <h3>${influencer.name}</h3>
                <p>${influencer.description}</p>
                <span class="category ${influencer.category}">${influencer.category.charAt(0).toUpperCase() + influencer.category.slice(1)}</span>
                
                <div class="stats">
                    <div class="stat">
                        <span class="stat-value">${influencer.subscribers}M</span>
                        <span class="stat-label">Subscribers</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${influencer.monthlyViews}M</span>
                        <span class="stat-label">Monthly Views</span>
                    </div>
                </div>
                
                <div style="margin-top: 1.5rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Engagement</span>
                        <span>${influencer.engagement}%</span>
                    </div>
                    <div class="progressBar engagement">
                        <div class="progressFill" style="width: ${influencer.engagement}%;"></div>
                    </div>
                </div>
                
                <div style="margin-top: 1rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Growth Rate</span>
                        <span>${influencer.growth}%</span>
                    </div>
                    <div class="progressBar growth">
                        <div class="progressFill" style="width: ${influencer.growth}%;"></div>
                    </div>
                </div>
                
                <div style="margin-top: 1rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Influence Score</span>
                        <span>${influencer.influence}%</span>
                    </div>
                    <div class="progressBar influence">
                        <div class="progressFill" style="width: ${influencer.influence}%;"></div>
                    </div>
                </div>
            </div>
        `;
        
        influencerGrid.appendChild(card);
    });
}

// Render bar chart
function renderChart() {
    const chartContainer = document.getElementById('subscriberChart');
    chartContainer.innerHTML = '';
    
    const top10 = influencers.slice(0, 10);
    const maxSubscribers = Math.max(...top10.map(inf => inf.subscribers));
    const chartHeight = 350;
    
    top10.forEach((influencer, index) => {
        const barHeight = (influencer.subscribers / maxSubscribers) * chartHeight;
        const position = index * 90 + 50;
        
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.left = `${position}px`;
        bar.style.height = '0';
        bar.style.backgroundColor = getColorForCategory(influencer.category);
        
        const label = document.createElement('div');
        label.classList.add('bar-label');
        label.textContent = influencer.name;
        
        const value = document.createElement('div');
        value.classList.add('bar-value');
        value.textContent = `${influencer.subscribers}M`;
        
        bar.appendChild(label);
        bar.appendChild(value);
        chartContainer.appendChild(bar);
        
        // Animate bars after a short delay
        setTimeout(() => {
            bar.style.height = `${barHeight}px`;
        }, 100 + index * 100);
    });
}

function getColorForCategory(category) {
    switch(category) {
        case 'tech': return '#6c63ff';
        case 'lifestyle': return '#4caf50';
        case 'gaming': return '#ff9800';
        case 'beauty': return '#f44336';
        default: return '#6c63ff';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    renderChart();
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Apply filter
            const filter = btn.getAttribute('data-filter');
            renderCards(filter);
        });
    });
});
