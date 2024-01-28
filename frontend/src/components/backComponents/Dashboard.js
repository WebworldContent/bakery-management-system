import React from "react";

import "./Dashboard.css";
import Header from "./Header";
import SideNav from "./SideNav";
import Form from "./Form";
import Orders from "./Orders";
import Chart from "./Chat";

const Dashboard = () => {
    return (
        <>
        <Header />
        <SideNav />
        <main>
            <Chart />
            <Form />
            <Orders />
        </main>
        </>
    );
};

export default Dashboard;