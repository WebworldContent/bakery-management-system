import React from "react";

const Header = ({ handleSideNav }) => {
  return (
    <header>
      <div className="burger-menu" onClick={() => handleSideNav(true)}>
        &#9776;
      </div>
      <h1>Bakery Admin Panel</h1>
      <div>
        <span>John Doe</span>
        <img src="account-icon.png" alt="Account Icon" width="30" height="30" />
      </div>
    </header>
  );
};

export default Header;
