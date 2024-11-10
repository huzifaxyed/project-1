import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WEARE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WEARE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Catogary</button>
        </div>{" "}
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon logo" />
            <img src="/images/flipkart.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../public/images/hero-image.png" alt="hero" />
      </div>
    </main>
  );
};

export default Hero;
