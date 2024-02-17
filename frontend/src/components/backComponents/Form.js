import React, { useCallback, useState } from "react";
import { addMenu } from "./services/menuService";
import "./Form.css";
import FormFields from "./FormFields";

const Form = ({ setNotify }) => {
  const [item, setItem] = useState({});

  const onImageError = (err) => {
    setNotify("error");
    console.log("Error", err);
  };

  const onImageSuccess = (res) => {
    setNotify("uploaded");
    console.log("Success", res);
  };

  const onImageProgress = (res) => {
    const {loaded, total} = res;
    console.log(total - loaded);
    setNotify("uploading");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addMenu(item);
      setItem({});
      setNotify("added");
    } catch (err) {
      console.log(err);
      setNotify("error");
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
        <FormFields
          onChange={onChange}
          item={item}
          onImageSuccess={onImageSuccess}
          onImageError={onImageError}
          onImageProgress={onImageProgress}
        />
        <button type="submit">Add Item</button>
      </form>
    </section>
  );
};

export default Form;
