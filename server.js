require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// Global handler for unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Uncomment below if you want to terminate the app on unhandled rejections
  // process.exit(1);
});

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

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

// Fetch reviews from ReviewTrackers API
app.get("/api/reviews/reviewtrackers", async (req, res) => {
  const apiKey = process.env.REVIEW_TRACKERS_API_KEY; // Replace with your API key
  const companyId = "your_company_id"; // Replace with your company ID from ReviewTrackers

  const url = `https://api.reviewtrackers.com/v1/companies/${companyId}/reviews?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.reviews || []); // Send reviews in response
  } catch (error) {
    console.error("Error fetching ReviewTrackers reviews:", error.message);
    res.status(500).send("Error fetching reviews.");
  }
});

// Fetch reviews from Google Places API
app.get("/api/reviews/google", async (req, res) => {
  const apiKey = process.env.GOOGLE_API_KEY; // Replace with your API key
  const placeId = "your_place_id"; // Replace with your Google Place ID

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.result.reviews || []);
  } catch (error) {
    console.error("Error fetching Google reviews:", error.message);
    res.status(500).send("Error fetching reviews.");
  }
});

// Fetch reviews from Yelp Fusion API
app.get("/api/reviews/yelp", async (req, res) => {
  const apiKey = process.env.YELP_API_KEY; // Replace with your Yelp API key
  const businessId = "your_yelp_business_id"; // Replace with your Yelp Business ID

  const url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    res.json(response.data.reviews || []);
  } catch (error) {
    console.error("Error fetching Yelp reviews:", error.message);
    res.status(500).send("Error fetching reviews.");
  }
});

// Fetch reviews from Trustpilot API
app.get("/api/reviews/trustpilot", async (req, res) => {
  const apiKey = process.env.TRUSTPILOT_API_KEY; // Replace with your Trustpilot API key
  const businessUnitId = "your_trustpilot_business_id"; // Replace with your Trustpilot Business ID

  const url = `https://api.trustpilot.com/v1/business-units/${businessUnitId}/reviews`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    res.json(response.data.reviews || []);
  } catch (error) {
    console.error("Error fetching Trustpilot reviews:", error.message);
    res.status(500).send("Error fetching reviews.");
  }
});

// Fetch reviews from Facebook Graph API
app.get("/api/reviews/facebook", async (req, res) => {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN; // Replace with your Facebook access token
  const pageId = "your_facebook_page_id"; // Replace with your Facebook page ID

  const url = `https://graph.facebook.com/${pageId}/ratings?access_token=${accessToken}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.data || []);
  } catch (error) {
    console.error("Error fetching Facebook reviews:", error.message);
    res.status(500).send("Error fetching reviews.");
  }
});

// Fetch reviews from BBB (Better Business Bureau) API
app.get("/api/reviews/bbb", async (req, res) => {
  const apiKey = process.env.BBB_API_KEY; // Replace with your BBB API key
  const companyId = "your_bbb_company_id"; // Replace with your BBB company ID

  const url = `https://api.bbb.org/v1/companies/${companyId}/reviews?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.reviews || []);
  } catch (error) {
    console.error("Error fetching BBB reviews:", error.message);
    res.status(500).send("Error fetching reviews.");
  }
});

// Google Map API configuration for embedding map
app.get("/api/map", async (req, res) => {
  const location = "Atlanta, GA"; // You can change this to any location as needed
  const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!googleMapsAPIKey) {
    return res.status(500).json({ error: "Google Maps API key is missing" });
  }

  const googleMapsLink = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
    location
  )}&key=${googleMapsAPIKey}`;

  try {
    // Optionally you can test the link to make sure it's working before sending it to the client
    // For example, we could make a GET request to the URL to check the response, though it's generally not required.
    res.json({ googleMapsLink });
  } catch (error) {
    console.error("Error fetching map link:", error.message);
    res.status(500).send("Error generating map link.");
  }
});
// app.get("/api/map", (req, res) => {
//   const location = "Atlanta, GA"; // Change the location as needed
//   const googleMapsLink = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
//     location
//   )}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   res.json({ googleMapsLink });
// });

// app.get("/api/config", (req, res) => {
//   res.json({
//     success: true,
//   });
// });

// app.get("/apiFun", (req, res) => {
//   res.send("API FUN");
//   console.log("API works");
//   res.end();
// });

// Serve frontend (React app)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎 App is running on http://localhost:${PORT}`);
});
