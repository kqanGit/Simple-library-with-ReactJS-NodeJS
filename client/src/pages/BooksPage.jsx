import BookList from "@/components/BookList";
import { useLoaderData } from "react-router-dom";

const BooksPage = () => {
  const sampleBooks = useLoaderData();
  return (
    <div>
      <BookList books={sampleBooks} />
    </div>
  );
};

export default BooksPage;
