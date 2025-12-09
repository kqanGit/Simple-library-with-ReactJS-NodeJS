import HomeLayout from "@/layouts/HomeLayout";
import BooksPage from "@/pages/BooksPage";
import AddBookPage from "@/pages/AddBookPage";
import EditBookPage from "@/pages/EditBookPage";
import { booksLoader, bookByIdLoader } from "@/loaders/booksLoader";
import { booksAction } from "@/actions/BooksAction";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <BooksPage />,
        loader: booksLoader,
        action: booksAction,
      },
      {
        path: "add-book",
        element: <AddBookPage />,
        action: booksAction, 
      },
      {
        path: "edit-book/:id",
        element: <EditBookPage />,
        action: booksAction, 
        loader: bookByIdLoader,
      },
    ],
  },
]);

const App = () => {
  console.log('App rendered');
  return <RouterProvider router={router} />;
};

export default App;
