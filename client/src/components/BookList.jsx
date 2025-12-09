import BookCard from '@/components/BookCard';

const BookList = ({ books, onDelete }) => {
  console.log(books);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;