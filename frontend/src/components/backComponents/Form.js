import React, { useCallback, useState } from "react";
import { addMenu } from "./services/menuService";
import "./Form.css";
import FormFields from "./FormFields";

const Form = ({ setNotify }) => {
  const [item, setItem] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addMenu(item);
      setItem({});
      setNotify('added');
    } catch (err) {
      console.log(err);
      setNotify('error');
    }
  };

  const onChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setItem((item) => ({ ...item, [name]: value }));
    },
    [setItem]
  );

  return (
    <section className="user-form">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <FormFields onChange={onChange} item={item} />
        <button type="submit">Add Item</button>
      </form>
    </section>
  );
};

export default Form;
