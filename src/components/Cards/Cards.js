import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Check our cars!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Explore hidden streets with the best cars"
              label="Adventure"
              path="/cars-rental-website-react"
            />
            <CardItem
              src={img2}
              text="Travel with your family in a safe way"
              label="Family"
              path="/cars-rental-website-react"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Do you want to go out in the field? You will certainly find something for yourself!"
              label="Off-road"
              path="/cars-rental-website-react"
            />
            <CardItem
              src={img4}
              text="Check v-max of our supercars"
              label="Sports-car"
              path="/cars-rental-website-react"
            />
            <CardItem
              src={img5}
              text="If comfort is your priority, choose a Bentley from our offer"
              label="Luxury"
              path="/cars-rental-website-react"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
