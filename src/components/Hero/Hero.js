import React from "react";
import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Cars available immediately</h1>
      <p>What will be your choice?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          type="button"
        >
          fleet
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          type="button"
        >
          contact
        </Button>
      </div>
    </div>
  );
};

export default Hero;
