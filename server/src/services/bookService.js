const bookRepo = require("../repositories/bookRepo");
const bookService = {
    getAllBooks: () => {
        return bookRepo.getAll();
    },
    getBookById: (id) => {
        const res = bookRepo.getById(id);
        console.log(res);
        console.log('test');
        return res;
    },
    createBook: (book) => {
        // console.log(book);
        if (!book.title.trim()) {
            throw new Error("Title are required.");
        }
        if (book.year && (typeof book.year !== "number" || book.year <= 0 || book.year > new Date().getFullYear())) {
            throw new Error("Year must be a valid positive number not greater than the current year.");
        }
        const books = bookRepo.getAll();
        for (const b of books) {
            if (b.title === book.title) {
                throw new Error("A book with the same title already exists.");
            }
        }
        bookRepo.create(book);
        return book;
    },
    updateBook: (id, updatedBook) => {
        for (const key in updatedBook) {
            if (key === "title" && !updatedBook.title.trim()) {
                throw new Error("Title are required.");
            }
            if (key === "year" && (typeof updatedBook.year !== "number" || updatedBook.year <= 0 || updatedBook.year > new Date().getFullYear())) {
                throw new Error("Year must be a valid positive number not greater than the current year.");
            }   
        }
        return bookRepo.update(id, updatedBook);
    },
    deleteBookById: (id) => {
        return bookRepo.deleteById(id);
    },
};

module.exports = bookService;