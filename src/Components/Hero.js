import React from "react";
import heroImage from "../images/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/reservation");
  }
  return (
    <section className="hero-section">
      <img src={heroImage} alt="picture of food" />
      <div className="hero-textbox">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          orci, posuere eu dolor non, imperdiet ultricies magna.Suspendisse eget
          commodo ex. Aenean vitae elit dignissim, commodo ex eget, imperdiet
          eros.
        </p>
        <button className="btn btn--reserve" onClick={handleClick}>
          Reserve a table
        </button>
      </div>
    </section>
  );
}

export default Hero;
