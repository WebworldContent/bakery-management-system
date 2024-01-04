import React from "react";
import { Link } from "react-router-dom";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";

const ProductSection = () => {
    return (
    <section class="product_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>
            Our products
          </h2>
          <p>
            Embark on a delectable journey at Damn! Bakery, where each confection is a symphony of flavors that dance on your taste buds.
          </p>
        </div>

        <div class="product_container">
          <div class="box_container">
            <div class="img-box">
              <img src={p2} class="img1" alt=""/>
            </div>
            <div class="box active">
              <div class="detail-box">
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
          <div class="box_container">
            <div class="img-box">
              <img src={p3} class="img1" alt=""/>
            </div>
            <div class="box">
              <div class="detail-box">
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
      </div>
    </section>
    );
};

export default ProductSection;