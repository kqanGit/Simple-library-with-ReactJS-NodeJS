const express = require("express");
const cors = require("cors"); 
const bookRoutes = require("./src/routes/bookRoutes");


const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

console.log("Book management server is starting...");
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
