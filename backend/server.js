const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.YOUTUBE_API_KEY;
const mongoURI = process.env.MONGO_URI

app.use(cors());
app.use(express.json());

// 🔹 Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB!"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));



// 🔹 Create Influencer Schema
const influencerSchema = new mongoose.Schema({
    name: String,
    channelId: String,
});

const Influencer = mongoose.model("Influencer", influencerSchema);

// 🔹 Fetch YouTube stats for all influencers
async function fetchInfluencerData() {
    const influencers = await Influencer.find();
    if (influencers.length === 0) return [];

    try {
        const ids = influencers.map(influencer => influencer.channelId).join(",");
        const response = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
            params: { part: "statistics", id: ids, key: API_KEY },
        });

        const statsMap = new Map();
        response.data.items.forEach(item => {
            statsMap.set(item.id, {
                subscribers: parseInt(item.statistics.subscriberCount) || 0,
                views: parseInt(item.statistics.viewCount) || 0,
                videos: parseInt(item.statistics.videoCount) || 0,
            });
        });

        const influencerData = influencers
            .map(influencer => {
                const stats = statsMap.get(influencer.channelId);
                return stats
                    ? {
                        name: influencer.name,
                        subscribers: stats.subscribers,
                        views: stats.views,
                        videos: stats.videos,
                        score: calculateScore(stats),
                    }
                    : null;
            })
            .filter(Boolean)
            .sort((a, b) => b.score - a.score);

        return influencerData;
    } catch (error) {
        console.error("Error fetching YouTube data:", error.message);
        return [];
    }
}

// 🔹 Ranking formula
function calculateScore(stats) {
    return (
        (Number(stats.subscribers) * 0.5) +
        (Number(stats.views) * 0.3) +
        (Number(stats.videos) * 0.2)
    );
}


// 🔹 Add new influencer route
app.post("/add-influencer", async (req, res) => {
    const { name, channelId } = req.body; 

    if (!name || !channelId) {
        return res.status(400).json({ message: "Name and Channel ID are required" });
    }

    try {
        const existing = await Influencer.findOne({
            $or: [{ channelId: channelId }, { name: name }]
        });

        if (existing) return res.status(400).json({ message: "Influencer already exists" });

        const newInfluencer = new Influencer({ name, channelId });
        await newInfluencer.save();
        res.json({ message: "Influencer added successfully" });

    } catch (error) {
        console.error("Error adding influencer:", error);
        res.status(500).json({ message: "Error adding influencer" });
    }
});


// 🔹 Get influencer rankings
app.get("/rankings", async (req, res) => {
    const data = await fetchInfluencerData();
    res.json(data);
});

// 🔹 Root route
app.get("/", (req, res) => {
    res.send("Welcome to InfluenceIQ API! Use /rankings to get influencer rankings.");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
