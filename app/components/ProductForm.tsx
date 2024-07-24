"use client";

import { useState } from "react";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (title.trim().length < 5) {
      newErrors.title = "Title must be at least 5 characters long.";
    }

    if (description.trim().length < 10) {
      newErrors.description =
        "Description must be at least 10 characters long.";
    }

    if (price <= 0) {
      newErrors.price = "Price must be a positive number.";
    }

    if (image && image.size > 2 * 1024 * 1024) {
      // 2 MB limit
      newErrors.image = "Image size must be less than 2MB.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Handle form submission logic here, e.g., send data to an API
    console.log({ title, description, price, image, categories });

    // Clear the form fields
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
    setCategories([]);
    setErrors({});
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCategories(selectedOptions);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        color: "black",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "100px",
          }}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description}</p>
        )}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Category:
        </label>
        <select
          multiple
          value={categories}
          onChange={handleCategoryChange}
          style={{
            width: "100%",
            padding: "8px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "100px",
          }}
        >
          <option value="pottery">Pottery</option>
          <option value="macrame">Macrame</option>
          <option value="knitting">Knitting</option>
          <option value="embroidery">Embroidery</option>
          <option value="painting">Painting</option>
        </select>
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
