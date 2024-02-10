import React from "react";
import Nav from "./Nav.js";
import Hero from "./Hero.js";
import Modal from "./Modal.js";

function Header() {
  return (
    <>
      <header>
        <Modal />
        <Nav />
        <Hero />
      </header>
    </>
  );
}

export default Header;
