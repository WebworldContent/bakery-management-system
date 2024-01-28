import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";

const SocialFooter = () => {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_social">
          <div>
            <Link href="">
              <img src={fb} alt=""/>
            </Link>
          </div>
          <div>
            <Link href="">
              <img src={linkedin} alt=""/>
            </Link>
          </div>
          <div>
            <Link href="">
              <img src={twitter} alt=""/>
            </Link>
          </div>
          <div>
            <Link href="">
              <img src={instagram} alt=""/>
            </Link>
          </div>
        </div>
        <div>
          <p>
            All rights reserved by Bakery Owner. \_(*_*)_/
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialFooter;