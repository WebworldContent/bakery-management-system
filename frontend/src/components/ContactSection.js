import React from "react";
import { Link } from "react-router-dom";
import callImg from "../assets/images/call.png";
import mailImg from "../assets/images/mail.png";
import locImg from "../assets/images/location.png";

const ContactSection = () => {
    return (
        <section className="contact_section layout_padding">
        <div className="container ">
          <div className="heading_container">
            <h2>
              Contact Us
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex justify-content-center">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
    
          </div>
        </div>
        <div className="container">
          <div className="contact_items">
    
            <Link to="">
              <div className="item ">
                <div className="img-box ">
                  <img src={callImg} alt=""/>
                </div>
                <div className="detail-box">
                  <p>
                    +02 1234567890
                  </p>
                </div>
              </div>
            </Link>
            <Link to="">
              <div className="item ">
                <div className="img-box ">
                  <img src={mailImg} alt=""/>
                </div>
                <div className="detail-box">
                  <p>
                    demo@gmail.com
                  </p>
                </div>
              </div>
            </Link>
            <Link to="">
              <div className="item ">
                <div className="img-box ">
                  <img src={locImg} alt=""/>
                </div>
                <div className="detail-box">
                  <p>
                    Location
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ContactSection;