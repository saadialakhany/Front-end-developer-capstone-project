import React from "react";
import logo from "../images/Logo.svg";
import menu from "../images/🦆 icon _hamburger menu.svg";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal.js";
import { useState } from "react";
import { useModalContext } from "./ModalContext";

function Nav() {
  const { setModalOpen } = useModalContext();

  return (
    <>
      <nav>
        <div className="nav--images">
          <img
            src={menu}
            alt="Ham-Burger Menu icon"
            className="menu--icon"
            onClick={() => setModalOpen(true)}
          />
          <img
            src={logo}
            alt="logo for Little Lemon"
            className="nav--logo"
          ></img>
        </div>

        <ul className="desktop--nav">
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
