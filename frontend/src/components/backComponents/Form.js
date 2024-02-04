import React, { useState } from "react";
import "./Form.css";
import { addMenu } from "./services/menuService";

const Form = () => {
  const [item, setItem] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addMenu(item);
      setItem({});
    } catch(err) {
      console.log(err);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setItem((item) => ({ ...item, [name]: value }));
  };

  return (
    <section className="user-form">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
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
        <input type="text" id="name" name="name" value={item.name || ''} onChange={onChange} required />

        <label for="price">Price (₹)</label>
        <input
          type="number"
          id="price"
          name="price"
          value={item.price || ''}
          min="0"
          step="0.01"
          onChange={onChange}
          required
        />

        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={item.description || ''}
          onChange={onChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
