import React, { useState, useCallback, useEffect } from "react";

import "./Dashboard.css";
import Header from "./Header";
import SideNav from "./SideNav";
import Form from "./Form";
import Orders from "./Orders";
import Chart from "./Chat";
import ItemsTable from "./ItemsTable";
import FormModal from "./FormModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DELETED = "deleted";
const UPDATED = "updated";
const ADDED = "added";
const ERROR = 'error';

const Dashboard = () => {
  const [isSideNavOpen, setisSideNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
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
      case ERROR: {
        toast.error("Something went wrong");
        break;
      }
      default: {
        break;
      }
    }
  }, [notify]);

  useEffect(() => {
    snackbarNote();
  }, [notify, snackbarNote])

  const handleSideNav = (isOpen) => {
    setisSideNavOpen(isOpen);
  };

  return (
    <>
      <Header handleSideNav={handleSideNav} />
      <SideNav isOpen={isSideNavOpen} handleSideNav={handleSideNav} />
      <main className={isSideNavOpen ? "active" : ""}>
        <Chart />
        <ToastContainer autoClose={5000} position="top-center" closeOnClick />
        <Form setNotify={setNotify}/>
        <FormModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          itemId={itemId}
          setNotify={setNotify}
        />
        <ItemsTable
          updateItemInfo={setItemId}
          setIsModalOpen={setIsModalOpen}
          notify={notify}
          setNotify={setNotify}
        />
        <Orders />
      </main>
    </>
  );
};

export default Dashboard;
