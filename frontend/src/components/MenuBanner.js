import React from "react";
import { Link } from "react-router-dom";
import './MenuBanner.css';

const MenuBanner = () => {
    return (
      <section class="banner_area">
        <div class="container">
          <div class="banner_text">
            <h3>Menu</h3>
            <ul>
              <li><Link to="index.html">Home</Link></li>
              <li><Link to="menu.html">Menu</Link></li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default MenuBanner;
