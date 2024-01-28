import React from "react";
import { Link } from "react-router-dom";
import cookImg from "../../assets/images/about-img.png";

const LandingSection = ({refer}) => {

  const handleClick = () => {
    refer.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };

  return (
  <section className="slider_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail_box">
            <h1>
                Welcome to <br/>
                Yumm! Bakery
            </h1>
            <p>
              Welcome to Yumm! Bakery, where every bite is a flavorful rebellion against the ordinary. Indulge in our sinfully delicious treats crafted with passion and precision, redefining the art of baking. </p>
            <Link to="" onClick={handleClick}>
                Shop Now
            </Link>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 offset-lg-1">
          <div className="img-box pr-md-4 pr-lg-5">
            <img src={cookImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default LandingSection;