import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav id="sideNav">
      <Link to="" >Dashboard</Link>
      <Link href="" class="active">
        User Form
      </Link>
      <Link href="">Orders</Link>
      <Link href="">Growth Chart</Link>
    </nav>
  );
};

export default SideNav;