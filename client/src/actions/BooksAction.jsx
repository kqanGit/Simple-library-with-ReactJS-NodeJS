import axios from "axios";
import { redirect } from "react-router-dom";

const API_URL = "http://localhost:3000/api";

export async function booksAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get("_intent");

  try {
    // ============= CREATE BOOK =============
    if (intent === "create") {
      const title = formData.get("title");
      const author = formData.get("author");
      const year = formData.get("year");

      await axios.post(`${API_URL}/books`, {
        title,
        author,
        year: year ? parseInt(year) : undefined,
      });

      return redirect("/");
    }

    // ============= UPDATE BOOK =============
    if (intent === "update") {
      const id = formData.get("id");
      const title = formData.get("title");
      const author = formData.get("author");
      const year = formData.get("year");

      await axios.put(`${API_URL}/books/${id}`, {
        title,
        author,
        year: year ? parseInt(year) : undefined,
      });


      return redirect("/");
    }

    // ============= DELETE BOOK =============
    if (intent === "delete") {
      const id = formData.get("id");
      await axios.delete(`${API_URL}/books/${id}`);
      console.log('redirecting after delete');

      return redirect("/");
    }

    return null;

  } catch (error) {

    console.log("Full error object:", error); // Debug

    // Case 1: Server trả về lỗi (400, 404, 500...)
    if (error.response) {
      console.log("Server error:", error.response.data);
      console.log("Status code:", error.response.status);
      
      return {
        error: error.response.data.error || "Something went wrong",
        status: error.response.status,
      };
    }


    if (error.request) {
      console.log("Network error:", error.request);
      
      return {
        error: "Network error. Please check your internet connection.",
        status: 0,
      };
    }

    console.log("Other error:", error.message);
    
    return {
      error: error.message || "An unexpected error occurred",
      status: 0,
    };
  }
}
