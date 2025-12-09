import { Link } from "react-router-dom";

const BookCard = ({ book, onDelete }) => {
  const { id, title, author, year } = book;

  return (
    <div className="flex flex-col justify-between border p-4 rounded shadow-md hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-xl font-bold line-clamp-2 h-16 mb-2">{title}</h2>
      <div className="mb-4">
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Year:</span> {year}
        </p>
      </div>
      
      <div className="flex justify-end gap-2">

        <Link
          to={`/edit-book/${id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Edit
        </Link>

  
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;