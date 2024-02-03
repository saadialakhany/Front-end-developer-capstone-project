import React from "react";
import About from "./About.js";
import Highlights from "./Highlights.js";
import Testimonials from "./Testimonials.js";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main>
      <Highlights />
      <Testimonials />
      <About />
      {/* <Outlet /> */}
    </main>
  );
}

export default Main;
