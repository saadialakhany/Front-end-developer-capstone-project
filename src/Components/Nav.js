import React from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const handleClick = (anchor) => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Nav() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo for Little Lemon"></img>
        <ul>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="about">
            <Link to="">About</Link>
          </li>
          <li key="menu">
            <Link to="">Menu</Link>
          </li>
          <li key="reservations">
            <Link to="/reservation">Reservation</Link>
          </li>
          <li key="order online">
            <Link to="">Order Online</Link>
          </li>
          <li key="login">
            <Link to="">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
