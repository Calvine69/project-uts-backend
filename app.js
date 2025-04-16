require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/characters", require("./routes/character"));
app.use("/weapons", require("./routes/weapon"));
app.use("/events", require("./routes/event"));
app.use("/materials", require("./routes/material"));
app.use("/talent-materials", require("./routes/talentMaterial"));
app.use("/talent-books", require("./routes/talentBook"));
app.use("/enemies", require("./routes/enemy"));
app.use("/enemy-drops", require("./routes/enemyDrop"));
app.use("/local-specialties", require("./routes/localSpecialty"));
app.use("/weapon-ascension-materials", require("./routes/weaponAscension"));

// Default Route
app.get("/", (req, res) => {
  res.send("🌟 Welcome to the Genshin API Clone!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
