import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useModalContext } from "./ModalContext";

function Modal() {
  const { isModalOpen, setModalOpen } = useModalContext();
  if (!isModalOpen) return null;
  return (
    <>
      <div className="modal">
        <FaTimes className="close--btn" onClick={() => setModalOpen(false)} />
        <ul className="modal--nav">
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
      </div>
      <div className="overlay" onClick={() => setModalOpen(false)}></div>
    </>
  );
}
export default Modal;
