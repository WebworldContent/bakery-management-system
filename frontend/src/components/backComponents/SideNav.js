import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, handleSideNav }) => {
  return (
    <nav id="sidenav" className={isOpen ? "active" : ""}>
      <span className="close-btn" onClick={() => handleSideNav(false)}>
        x
      </span>
      <Link to="">Dashboard</Link>
      <Link to="" className="active">
        User Form
      </Link>
      <Link to="">Orders</Link>
      <Link to="">Growth Chart</Link>
    </nav>
  );
};

export default SideNav;
