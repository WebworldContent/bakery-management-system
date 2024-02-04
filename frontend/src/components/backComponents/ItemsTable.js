import React, { useEffect, useState } from "react";
import { getMenu } from "./services/menuService";

const ItemsTable = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getMenu();
      setMenu(data);
    };
    fetchData();
  }, []);

  return (
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
            {menu.length > 0 && menu.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.description}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ItemsTable;