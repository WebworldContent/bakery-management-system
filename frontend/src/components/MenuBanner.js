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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default MenuBanner;
