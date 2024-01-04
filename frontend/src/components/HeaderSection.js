import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png"

const HeaderSection = () => {
    return (
        <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="index.html">
              <img src={logoImg} alt="logo" />
              <span>
                Cakejoey
              </span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="index.html">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="about.html"> About </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="product.html"> Products </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link last_link" to="contact.html"> Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
};

export default HeaderSection;