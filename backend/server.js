const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const addContactEmail = require("./src/includes/addContactEmail");

const app = express();

app.set("forceSSLOptions", {
  enable301Redirects: true,
  trustXFPHeader: false,
  httpsPort: 443,
  sslRequiredMessage: "SSL Required.",
});

app.use(cookieParser());

dotenv.config();

app.use(express.static(path.join(__dirname, "/build")));

app.use(bodyParser.json());

app.get("/api/message/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the backend",
  });
});

app.get("/api/contact/", async (req, res) => {
  addContactEmail(req, res);
});

app.get("/api/videos/", async (req, res) => {
  const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;

  axios.get(youtubeURL).then((resp) => {
    res.status(200).json(resp.data);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
