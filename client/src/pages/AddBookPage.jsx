import { Form, useActionData, useNavigation } from "react-router-dom";

const AddBookPage = () => {
  const actionData = useActionData(); // ← Nhận data từ action
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Book</h2>

      {/* ============= HIỂN THỊ ERROR ============= */}
      {actionData?.error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold">Error:</p>
          <p>{actionData.error}</p>
        </div>
      )}

      <Form method="post" className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input type="hidden" name="_intent" value="create" />

        <div>
          <label className="block text-sm font-bold mb-2">Title *</label>
          <input
            type="text"
            name="title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Author *</label>
          <input
            type="text"
            name="author"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Year</label>
          <input
            type="number"
            name="year"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Book"}
        </button>
      </Form>
    </div>
  );
};

export default AddBookPage;