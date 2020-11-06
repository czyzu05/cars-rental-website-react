import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";
import img1 from "../../assets/images/img-9.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-8.jpg";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out our cars!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of Bali in a Pravate Cruise"
              label="Luxury"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/"
            />
            <CardItem
              src={img4}
              text="Experience Football on Top of the Mountain"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img5}
              text="Ride through the Sahara Desert on a guide camel tour"
              label="Adrenaline"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
