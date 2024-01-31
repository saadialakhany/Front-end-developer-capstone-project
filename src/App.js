import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Highlights from "./Components/Highlights.js";
import About from "./Components/About.js";
import Testimonials from "./Components/Testimonials.js";
import { Reservation } from "./Components/Reservation.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/main" element={<Main />}>
          <Route path="highlights" element={<Highlights />}></Route>
          <Route path="testimonials" element={<Testimonials />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
