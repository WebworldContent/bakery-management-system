import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";

const ProductSection = ({getRef}) => {
  const menuRef = useRef();

  useEffect(() => {
    getRef(menuRef);
  },[getRef]);

  return (
  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Top Dishes
        </h2>
        <p>
          Embark on a delectable journey at Yumm! Bakery, where each confection is a symphony of flavors that dance on your taste buds.
        </p>
      </div>

      <div className="product_container">
        <div className="box_container">
          <div className="img-box">
            <img src={p2} className="img1" alt=""/>
          </div>
          <div className="box active">
            <div className="detail-box">
              <h5>
                Party Special
              </h5>
              <p>3000 ₹</p>
              <Link to="">
                Add Item
              </Link>
            </div>
          </div>
        </div>
        <div className="box_container">
          <div className="img-box">
            <img src={p3} className="img1" alt=""/>
          </div>
          <div className="box">
            <div className="detail-box">
              <h5>
                Sweet Treat
              </h5>
              <p>700 ₹</p>
              <Link to="">
                Add Item
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/menu">
        <div className="show-menu-btn" ref={menuRef}>
          Show Menu
        </div>
      </Link>
    </div>
  </section>
  );
};

export default ProductSection;