const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS settings for local + deployed frontend
app.use(cors({
  origin: [
    "https://relocate-frontend.onrender.com", // deployed frontend
    "http://localhost:5173", // Vite default port
    "http://localhost:3000"  // CRA default port
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.options(/.*/, cors());


// Middleware
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// ✅ Routes
app.use("/api/auth", require("./routes/auth"));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
