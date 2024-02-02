import React, { useState } from "react";
import Nav from "./Nav";

function BookingForm() {
  const [formData, setformData] = useState({
    date: "",
    time: "",
    guests: "1",
    occassion: "Birthday",
  });

  const [availableTimings, setAvailableTimings] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <>
      <div className="reservation">
        <Nav />
        <div div className="reservation--header">
          <h1>Reserve Table</h1>
          <p>Please fill in the form below to enable us to serve you better!</p>
        </div>
        <div className="reservation--body">
          <form>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={formData.date}
              onChange={(e) =>
                setformData((prevState) => {
                  return { ...prevState, date: e.target.value };
                })
              }
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              value={formData.time}
              onChange={(e) =>
                setformData((prevState) => {
                  return { ...prevState, time: e.target.value };
                })
              }
            >
              {availableTimings.map((el) => {
                return <option key={el}>{el}</option>;
              })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={formData.guests}
              onChange={(e) =>
                setformData((prevState) => {
                  return { ...prevState, guests: e.target.value };
                })
              }
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formData.occassion}
              onChange={(e) =>
                setformData((prevState) => {
                  return { ...prevState, occassion: e.target.value };
                })
              }
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Wedding</option>
            </select>
            <input
              type="submit"
              value="Make your Reservation"
              class="btn btn--reserve--page"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export function Reservation() {
  return <BookingForm />;
}
