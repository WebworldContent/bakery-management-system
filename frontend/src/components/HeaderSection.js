import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const HeaderSection = ({cart, cartPrice}) => {
  const [openCart, setOpenCart] = useState(false);

    return (
        <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="index.html">
              <span style={{fontSize: '32px'}}>
                Yumm! Bakery
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
                    <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/menu'}> Menu </Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link className="nav-link" to={'/cart'}> */}
                    <div className="nav-link" style={{cursor: 'pointer'}} onClick={() => setOpenCart(true)}>
                      <i className="fa fa-shopping-cart mr-1"></i> Cart
                      <span className="badge badge-pill badge-danger ml-1">
                        {cart.length}
                      </span>
                    </div>
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </div>
            <Cart cart={cart} cartPrice={cartPrice} showModal={openCart} closeModal={(close) => setOpenCart(close)}/>
          </nav>
        </div>
      </header>
    );
};

export default HeaderSection;