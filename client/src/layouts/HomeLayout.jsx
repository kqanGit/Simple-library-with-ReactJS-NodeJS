import BookList from "@/components/BookList.jsx";
import { NavLink, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <header className="flex justify-between items-center text-black py-10">
        <h1 className="text-3xl font-bold">Simple Library</h1>
        <nav className="flex gap-4 text-lg font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive 
                ? 'bg-black rounded px-4 py-2 text-white' 
                : 'px-4 py-2 hover:bg-gray-200 rounded'
            }
          >
            Books
          </NavLink>
          <NavLink 
            to="/add-book"
            className={({ isActive }) =>
              isActive 
                ? 'bg-black rounded px-4 py-2 text-white' 
                : 'px-4 py-2 hover:bg-gray-200 rounded'
            }
          >
            Add Book
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default HomeLayout;