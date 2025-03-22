// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Make sure we're only using one event listener
    const fetchButton = document.getElementById("fetchButton");
    if (fetchButton) {
        // Remove all existing click handlers
        const newButton = fetchButton.cloneNode(true);
        fetchButton.removeEventListener("click", fetchRankings);
        fetchButton.parentNode.replaceChild(newButton, fetchButton);
        // Add our new handler
        newButton.addEventListener("click", fetchRankings);
    }
});

const API_BASE_URL = "https://hackathon-auraflix-impactiq.onrender.com"; 

async function fetchRankings() {
    try {
        const rankingList = document.getElementById("rankingList");
        rankingList.innerHTML = "";

        const response = await fetch(`${API_BASE_URL}/rankings`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        let data = await response.json();

        // Ensure sorting before rendering
        const sortedData = data.sort((a, b) => b.subscribers - a.subscribers);

        sortedData.forEach((influencer, index) => {
            const listItem = document.createElement("li");
            listItem.className = "ranking-item";
            listItem.innerHTML = `
                <div class="rank">#${index + 1}</div>
                <div class="influencer-info">
                    <div class="influencer-name">${influencer.name}</div>
                    <div class="subscriber-count">${formatNumber(influencer.subscribers)} Subscribers</div>
                </div>
            `;
            rankingList.appendChild(listItem);
        });
    } catch (error) {
        console.error("❌ Error fetching rankings:", error);
    }
}




// Format numbers with commas (e.g., 1,000,000)
function formatNumber(num) {
    if (!num) return "0";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Add New Influencer
function addInfluencer() {
    const nameInput = document.getElementById("name");
    const channelIdInput = document.getElementById("channelId");
    
    if (!nameInput || !channelIdInput) {
        alert("Form inputs not found!");
        return;
    }
    
    const name = nameInput.value.trim();
    const channelId = channelIdInput.value.trim();
    
    if (!name || !channelId) {
        alert("Please fill in both name and channel ID fields");
        return;
    }

    // Show loading spinner
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) spinner.style.display = "block";

    // Using the exact endpoint and payload structure from your original code
    fetch(`${API_BASE_URL}/add-influencer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, channelId }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Hide spinner
        if (spinner) spinner.style.display = "none";
        
        // Clear input fields
        if (nameInput) nameInput.value = "";
        if (channelIdInput) channelIdInput.value = "";
        
        alert(data.message || "Influencer added successfully!");
        fetchRankings();  // Refresh rankings
    })
    .catch(error => {
        console.error("Error adding influencer:", error);
        if (spinner) spinner.style.display = "none";
        alert(`Failed to add influencer: ${error.message}`);
    });
}