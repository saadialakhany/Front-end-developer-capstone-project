import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Reservation from "./Components/Reservation.js";
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
