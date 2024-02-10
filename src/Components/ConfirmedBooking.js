import React from "react";
import Nav from "./Nav";
import image from "../images/like.gif";
import Modal from "./Modal";

function ConfirmedBooking() {
  return (
    <section className="confirmation-booking">
      <Nav />
      <Modal />
      <div className="confirmation--content">
        <img src={image} alt="animated thumbs up" />
        <h1>
          Congratulations!!!!
          <br></br>Your Table Reservation Request was Successful.
        </h1>
        <h3>
          A copy of reservation has also been sent to your registered email
          address.
        </h3>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
