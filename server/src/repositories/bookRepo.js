const fs = require("fs");
const path = require("path");

const booksFilePath = path.join(__dirname, "../data/books.json");

const readData = () => {
  const data = fs.readFileSync(booksFilePath, "utf-8");
  return JSON.parse(data).books;
};

const writeData = (data) => {
  fs.writeFileSync(booksFilePath, JSON.stringify({ books: data }, null, 2), "utf-8");
};

const bookRepo = {
  getAll: () => {
    const books = readData();
    // console.log(books);
    return books;
  },
  getById: (id) => {
    // console.log("Getting book by ID:", id);
    const books = readData();
    return books.find((book) => book.id == id);
  },
  create: (book) => {
    const books = readData();
    // console.log(typeof(books));
    const newBook = { id: Date.now().toString(), ...book };
    const newBooks = [...books, newBook];
    writeData(newBooks);
    return newBook;
  },
  update: (id, updatedBook) => {
    const books = readData();
    const index = books.findIndex((book) => book.id == id);
    if (index === -1) {
      return null;
    }
    books[index] = { ...books[index], ...updatedBook };
    writeData(books);
    return books[index];
  },
  deleteById: (id) => {
    const books = readData();
    const index = books.findIndex((book) => book.id == id);
    if (index === -1) {
      return false;
    }
    books.splice(index, 1);
    writeData(books);
    return true;
  },
};

module.exports = bookRepo;
