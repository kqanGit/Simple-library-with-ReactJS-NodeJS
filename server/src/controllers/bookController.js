const bookService = require("../services/bookService");

const bookController = {
  // GET /api/books
  getAllBooks: (req, res) => {
    try {
      const books = bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // POST /api/books
  createBook: (req, res) => {
    try {
      const book = bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // PUT /api/books/:id
  updateBook: (req, res) => {
    try {
      const { id } = req.params;
      const updatedBook = bookService.updateBook(id, req.body);
      
      if (!updatedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // DELETE /api/books/:id
  deleteBook: (req, res) => {
    try {
      const { id } = req.params;
      const deleted = bookService.deleteBookById(id);
      
      if (!deleted) {
        return res.status(404).json({ error: "Book not found" });
      }
      
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = bookController;
