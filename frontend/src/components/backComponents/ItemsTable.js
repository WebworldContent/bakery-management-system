import React, { useEffect, useState } from "react";
import { getMenu, deleteMenu } from "./services/menuService";
import "./ItemsTable.css";

const DELETED = "deleted";

const ItemsTable = ({ updateItemInfo, setIsModalOpen, notify, setNotify }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getMenu();
      setMenu(data);
    };
    fetchData();
  }, [notify]);

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
      setNotify('error');
    }
  };

  return (
    <>
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
