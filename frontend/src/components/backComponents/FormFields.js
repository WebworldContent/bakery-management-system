import React from "react";

const FormFields = ({item, onChange}) => {
  return (
    <>
      <label for="image" className="img-upload-label">
        Upload Image
      </label>
      <div className="file-input-container">
        <input
          type="file"
          id="image"
          name="image"
          className="file-input"
          accept="image/*"
        />
      </div>

      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={item.name || ""}
        onChange={onChange}
        required
      />

      <label for="price">Price (₹)</label>
      <input
        type="number"
        id="price"
        name="price"
        value={item.price || ""}
        min="0"
        step="0.01"
        onChange={onChange}
        required
      />

      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={item.description || ""}
        onChange={onChange}
        required
      ></textarea>
    </>
  );
};

export default FormFields;
