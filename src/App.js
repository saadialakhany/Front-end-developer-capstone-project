import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import { ModalProvider } from "../src/Components/ModalContext";
import Modal from "../src/Components/Modal";

function App() {
  return (
    <React.Fragment>
      <ModalProvider>
        <div className="app">
          <Modal />
          <Header />
          <Main />
          <Footer />
        </div>
      </ModalProvider>
    </React.Fragment>
  );
}

export default App;
