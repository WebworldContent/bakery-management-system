import React from "react";
import { Link } from "react-router-dom";
import cookImg from "../assets/images/about-img.png";

const LandingSection = () => {
    return (
    <section className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail_box">
              <h1>
                  Welcome to <br/>
                  Our Cake Shop
              </h1>
              <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
              <Link to="" className="">
                  Shop Now
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <div class="img-box pr-md-4 pr-lg-5">
              <img src={cookImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default LandingSection;