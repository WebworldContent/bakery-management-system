import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
    <section className="client_section">
      <div className="container">
        <div className="row">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p style={{color: "white", fontSize: "large"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <Link to="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutSection;