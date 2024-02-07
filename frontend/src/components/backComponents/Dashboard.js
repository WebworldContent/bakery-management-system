import React, {useState} from "react";

import "./Dashboard.css";
import Header from "./Header";
import SideNav from "./SideNav";
import Form from "./Form";
import Orders from "./Orders";
import Chart from "./Chat";
import ItemsTable from "./ItemsTable";

const Dashboard = () => {
  const [isSideNavOpen, setisSideNavOpen] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleSideNav = (isOpen) => {
    setisSideNavOpen(isOpen);
  };

  return (
    <>
      <Header handleSideNav={handleSideNav} />
      <SideNav isOpen={isSideNavOpen} handleSideNav={handleSideNav} />
      <main className={isSideNavOpen ? "active" : ""}>
        <Chart />
        <Form setIsItemAdded={setIsItemAdded}/>
        <ItemsTable isItemAdded={isItemAdded} />
        <Orders />
      </main>
    </>
  );
};

export default Dashboard;
