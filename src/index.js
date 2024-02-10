import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Main from "./Components/Main.js";
import Highlights from "./Components/Highlights.js";
import About from "./Components/About.js";
import Testimonials from "./Components/Testimonials.js";
import { Reservation } from "./Components/Reservation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./Components/ConfirmedBooking.js";
import { ModalProvider } from "../src/Components/ModalContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/main" element={<Main />}>
            <Route path="highlights" element={<Highlights />}></Route>
            <Route path="testimonials" element={<Testimonials />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
