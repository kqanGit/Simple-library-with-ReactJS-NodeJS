const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

// Get all books
router.get("/", bookController.getAllBooks);

// Get book by ID
router.get("/:id", bookController.getBookById);

// Create a new book
router.post("/", bookController.createBook);

// Update a book by ID
router.put("/:id", bookController.updateBook);

// Delete a book by ID
router.delete("/:id", bookController.deleteBook);


module.exports = router;
