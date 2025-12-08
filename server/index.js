const express = require("express");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

console.log("Book management server is starting...");
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
