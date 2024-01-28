import React from "react";
import './Form.css';

const Form = () => {
  return (
    <section className="user-form">
        <h2>Product Form</h2>
        <form>
            <label for="image" className="img-upload-label">Upload Image</label>
            <div className="file-input-container">
                <input type="file" id="image" name="image" className="file-input" accept="image/*" />
            </div>

            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label for="price">Price</label>
            <input type="number" id="price" name="price" min="0" step="0.01" required />

            <label for="description">Description</label>
            <textarea id="description" name="description" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </section>
  );
};

export default Form;