const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000; // Choose your desired port

app.use(cors()); // Enable CORS

// Serve the static JSON file
app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "index.json"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
