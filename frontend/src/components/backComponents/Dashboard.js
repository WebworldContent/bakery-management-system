import React, {useState} from "react";

import "./Dashboard.css";
import Header from "./Header";
import SideNav from "./SideNav";
import Form from "./Form";
import Orders from "./Orders";
import Chart from "./Chat";
import ItemsTable from "./ItemsTable";
import FormModal from "./FormModal";

const Dashboard = () => {
  const [isSideNavOpen, setisSideNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);

  const handleSideNav = (isOpen) => {
    setisSideNavOpen(isOpen);
  };

  return (
    <>
      <Header handleSideNav={handleSideNav} />
      <SideNav isOpen={isSideNavOpen} handleSideNav={handleSideNav} />
      <main className={isSideNavOpen ? "active" : ""}>
        <Chart />
        <Form />
        <FormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} itemId={itemId} />
        <ItemsTable updateItemInfo={setItemId} setIsModalOpen={setIsModalOpen} />
        <Orders />
      </main>
    </>
  );
};

export default Dashboard;
