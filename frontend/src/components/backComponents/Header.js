import React from "react";

const Header = () => {
  return (
    <header>
      <div className="burger-menu" onclick="toggleMenu()">
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
