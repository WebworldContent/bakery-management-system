import React, { useState } from "react";
import "./Form.css";
import { addMenu } from "./services/menuService";

const Form = () => {
  const [menu, setMenu] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addMenu(menu);
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setMenu((menu) => ({ ...menu, [name]: value }));
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
        <input type="text" id="name" name="name" onChange={onChange} required />

        <label for="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="0.01"
          onChange={onChange}
          required
        />

        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={onChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
