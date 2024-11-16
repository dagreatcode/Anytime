require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// Enable CORS for your frontend
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets (usually on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Serve static images
app.use(express.static("images"));

// MongoDB Connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Anytime_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// Fetch Google Reviews using Google Places API
app.get("/api/reviews", async (req, res) => {
  const placeId = "ChIJjQmTaV0E9YgRC2MLmS_e_mY"; // Replace with your actual Place ID
  const apiKey = process.env.GOOGLE_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=review&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.result.reviews || []); // Return reviews directly
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    res.status(500).send("Error fetching reviews.");
  }
});

// Google Map API configuration for embedding map
app.get("/api/map", (req, res) => {
  const location = "Atlanta, GA"; // Change the location as needed
  const googleMapsLink = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  res.json({ googleMapsLink });
});

// Serve frontend (React app)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎 App is running on http://localhost:${PORT}`);
});
