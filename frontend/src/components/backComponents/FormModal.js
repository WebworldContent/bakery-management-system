import React, { useState, useCallback, useEffect } from "react";
import "./FormModal.css";
import FormFields from "./FormFields";
import { updateMenu, getItem } from "./services/menuService";

const FormModal = ({ isModalOpen, setIsModalOpen, itemId }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getItemToUpdate = async () => {
      const { data } = await getItem(itemId);
      setItem(data[0]);
    };
    if (itemId) {
      getItemToUpdate();
    }
  }, [itemId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateMenu(item);
      setItem({});
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
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
    <>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <span className="close-button" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <FormFields onChange={onChange} item={item} />
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
