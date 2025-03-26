import { useState } from "react";
import axios from "axios";

const UpdateProduct = () => {
  // State variables for form inputs
  const [productId, setProductId] = useState(""); // To identify the product to update
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  // State variables for loading, error, and success messages
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to handle form submission
  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading("Updating product..."); // Show loading message

      // Prepare the data to send in the request
      const data = new FormData();
      data.append("id", productId); // Include the product ID for identification
      data.append("name", name);
      data.append("description", description);
      data.append("quantity", quantity);

      // Send the PUT request to update the product
      const response = await axios.put(
        "http://modcom2.pythonanywhere.com/api/update_product",
        data
      );

      // Clear loading state and show success message
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading(""); // Clear loading state

      // Handle different types of errors
      if (error.response) {
        console.log("Error response:", error.response);
        console.log("HTTP Status Code:", error.response.status);
        if (error.response.data && error.response.data.message) {
          setError(`${error.response.data.message}`);
        } else {
          setError(`Error: ${error.response.status} - An error occurred.`);
        }
      } else if (error.request) {
        console.log("No response received:", error.request);
        setError("No response received from server. Please check your network connection.");
      } else {
        console.log("General error:", error);
        setError(`Error: ${error.message || "An unexpected error occurred."}`);
      }
    }
  };

  return (
    <div>
      <div className="row justify-content-center mt-4">
        {/* Display loading, error, or success messages */}
        {loading && <h1 className="text-info">{loading}</h1>}
        {error && <h1 className="text-danger">{error}</h1>}
        {success && <h1 className="text-success">{success}</h1>}

        {/* Form for updating a product */}
        <form action="" className="card shadow col-md-6 p-4" onSubmit={submit}>
          <h1 className="text-center">Update Product</h1>

          {/* Product ID input */}
          <label htmlFor="">Product ID</label><br />
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Enter product ID"
            onChange={(e) => setProductId(e.target.value)}
            required
          /><br />

          {/* Product Name input */}
          <label htmlFor="">Product Name</label><br />
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter product name"
            onChange={(e) => setName(e.target.value)}
            required
          /><br />

          {/* Description input */}
          <label htmlFor="">Description</label><br />
          <textarea
            className="form-control mb-4"
            placeholder="Enter product description"
            onChange={(e) => setDescription(e.target.value)}
            required
          /><br />

          {/* Quantity input */}
          <label htmlFor="">Quantity</label><br />
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Enter product quantity"
            onChange={(e) => setQuantity(e.target.value)}
            required
          /><br />

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;