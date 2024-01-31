import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Main />
      </div>
    </React.Fragment>
  );
}

export default App;
