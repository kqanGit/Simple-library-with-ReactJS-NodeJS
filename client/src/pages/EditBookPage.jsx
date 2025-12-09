import { Form, useLoaderData, useActionData, useNavigation, useParams } from "react-router-dom";

const EditBookPage = () => {
  const { id } = useParams();
  const book = useLoaderData(); 
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Edit Book</h2>

      {actionData?.error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold">❌ Error:</p>
          <p>{actionData.error}</p>
        </div>
      )}

      <Form 
        method="put" 
        noValidate
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <input type="hidden" name="_intent" value="update" />
        <input type="hidden" name="id" value={id} /> {/* ✅ THÊM DÒNG NÀY */}

        <div>
          <label className="block text-sm font-bold mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            defaultValue={book.title}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">
            Author *
          </label>
          <input
            type="text"
            name="author"
            defaultValue={book.author}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">
            Year
          </label>
          <input
            type="number"
            name="year"
            defaultValue={book.year}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
            placeholder="Enter publication year"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookPage;