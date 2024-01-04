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
              At Damn! Bakery, the flour wars are legendary, with our mischievous pastry chefs engaging in epic dough battles, leaving the kitchen looking like a flour-filled battleground. Our mascot, a mischievous doughnut named Sprinkles, orchestrates the chaos with a sprinkle of humor. Rumor has it, our cookies have a secret society where they plan midnight escapades, eluding the grasp of the cookie jar. The croissants, on the other hand, believe they are royalty, flaunting their flaky crowns with unmatched arrogance. Despite the sweet chaos, our bakery remains a whimsical haven where laughter is the secret ingredient, and every treat tells a hilarious tale.
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