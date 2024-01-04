import React from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import rightArrow from "../assets/images/right-arrow.png";

const ProductSection = () => {
    return (
    <section class="product_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>
            Our products
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have
          </p>
        </div>

        <div class="product_container">
          <div class="box_container">
            <div class="img-box">
              <img src={p1} class="img1" alt="" />
            </div>
            <div class="box">
              <div class="detail-box">
                <h5>
                  Classic Treat
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum available, butdon't look even slightly believable.
                </p>
                <Link to="">
                  <img src={rightArrow} alt=""/>
                </Link>
              </div>
            </div>
          </div>
          <div class="box_container">
            <div class="img-box">
              <img src={p2} class="img1" alt=""/>
            </div>
            <div class="box active">
              <div class="detail-box">
                <h5>
                  Party Special
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum available, butdon't look even slightly believable.
                </p>
                <Link to="">
                  <img src={rightArrow} alt=""/>
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
                <p>
                  There are many variations of passages of Lorem Ipsum available, butdon't look even slightly believable.
                </p>
                <Link to="">
                  <img src={rightArrow} alt=""/>
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