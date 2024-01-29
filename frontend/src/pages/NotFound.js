import React from "react";
import "../assets/css/404.css";
import gifImage from "../assets/images/404.gif";

const NotFoundPage = () => {
  return (
    <div class="container">
      <div class="error-message">
        <h1>404</h1>
        <img src={gifImage}/>
        <p>Not Found</p>
        <p>Sorry, the page you are looking for might be in another castle.</p>
      </div>
      <div class="animation"></div>
    </div>
  );
};

export default NotFoundPage;
