import React, { useCallback, useEffect, useState } from "react";
import { getMenu, deleteMenu } from "./services/menuService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemsTable.css";

const DELETED = "deleted";
const UPDATED = "updated";
const ADDED = "added";

const ItemsTable = ({ updateItemInfo, setIsModalOpen }) => {
  const [menu, setMenu] = useState([]);
  const [notify, setNotify] = useState(""); //added|updated|deleted

  const snackbarNote = useCallback(() => {
    switch (notify) {
      case DELETED: {
        toast.success("Item deleted successfully");
        break;
      }
      case UPDATED: {
        toast.success("Item updated successfully");
        break;
      }
      case ADDED: {
        toast.success("Item added successfully");
        break;
      }
      default: {
        break;
      }
    }
  }, [notify]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getMenu();
      setMenu(data);
    };
    fetchData();
    if (!!notify) {
      snackbarNote();
    }
  }, [notify, snackbarNote]);

  const onUpdate = async (itemId) => {
    updateItemInfo(itemId);
    setIsModalOpen(true);
  };

  const onDelete = async (data) => {
    try {
      const response = await deleteMenu(data);
      console.log(response.data);
      setNotify(DELETED);
    } catch (err) {
      console.log(err);
      toast.error("Someting went wrong, please try again later");
    }
  };

  return (
    <>
      <ToastContainer autoClose={5000} position="top-center" closeOnClick />
      <section>
        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr key={0}>
                <th>ID</th>
                <th>Name</th>
                <th>price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menu.length > 0 &&
                menu.map((data, indx) => (
                  <tr key={data.id}>
                    <td>{indx + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.description}</td>
                    <td>
                      <button onClick={() => onUpdate(data.id)}>Edit</button>
                      <button onClick={() => onDelete(data)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ItemsTable;
