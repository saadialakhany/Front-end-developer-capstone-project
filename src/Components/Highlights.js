import React from "react";
import { FaBiking } from "react-icons/fa";
import greekSalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon dessert.jpg";

function FeaturesCard({ image, heading, price }) {
  return (
    <>
      <div className="feature-card">
        <img src={image} alt="picture of food" />

        <div className="feature-card-text">
          <div className="text--header">
            <h3>{heading}</h3>
            <p className="price">{price}</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut diam ut massa consequat facilisis ut sit amet ante.
            Nunc dapibus, tortor eget mollis consectetur.
          </p>
          <div className="feature--order-link">
            <a href="#">Order for Delivery</a>
            <FaBiking className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights--header">
        <h1>This week's specials!</h1>
        <button className="btn btn--menu">Online Menu</button>
      </div>
      <div className="highlights--main">
        <FeaturesCard image={greekSalad} heading="Greek Salad" price="12$" />
        <FeaturesCard image={bruchetta} heading="Bruchetta" price="15$" />
        <FeaturesCard
          image={lemonDessert}
          heading="Lemon Dessert"
          price="13$"
        />
      </div>
    </section>
  );
}

export default Highlights;
