import { useState } from "react";
import BookList from "@/components/BookList";
import SearchBar from "@/components/SearchBar";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const BooksPage = () => {
  const allBooks = useLoaderData();
  const [books, setBooks] = useState(allBooks);
  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredBooks(books);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(lowercasedSearch);
      const authorMatch = book.author.toLowerCase().includes(lowercasedSearch);
      return titleMatch || authorMatch;
    });

    setFilteredBooks(filtered);
  };

  const handleDelete = async (id) => {
    try {
      // Xóa trên UI ngay lập tức
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      setFilteredBooks(updatedBooks);

      // Gọi API xóa trên server
      await axios.delete(`http://localhost:3000/api/books/${id}`);
    } catch (error) {
      console.error("Delete failed:", error);
      // Nếu lỗi, khôi phục lại
      setBooks(allBooks);
      setFilteredBooks(allBooks);
      alert("Failed to delete book. Please try again.");
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      {filteredBooks.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No books found matching your search.</p>
        </div>
      ) : (
        <BookList books={filteredBooks} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default BooksPage;
