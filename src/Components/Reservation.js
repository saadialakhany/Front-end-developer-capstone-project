import React, { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import Nav from "./Nav";

//const availableTimings = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    occassion: "Birthday",
  });

  const [availableTimings, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function initializeTimes(selectedDate) {
    if (!selectedDate) {
      return Promise.resolve([]); // Resolve with an empty array if the date is falsy
    }
    return fetchData(selectedDate); // This should return a Promise that resolves to the timings
  }

  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      try {
        if (!formData.date) {
          dispatch({ type: "INITIALIZE_TIMES", timings: [] });
          return;
        }
        const timings = await initializeTimes(formData.date);
        dispatch({ type: "INITIALIZE_TIMES", timings });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndDispatch();
  }, [formData.date]);

  async function fetchData(selectedDate) {
    try {
      const timings = await fetchAPI(selectedDate);
      // console.log("Fetched timings:", timings);

      return timings; // This should be the resolved array
    } catch (error) {
      // console.error("Error fetching data:", error);
      return []; // Return an empty array to handle the error
    }
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "INITIALIZE_TIMES":
        return action.timings; // This should be the array
      default:
        return state;
    }
  }

  return (
    <>
      <div className="reservation">
        <Nav />
        <div className="reservation--header">
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
              onChange={(e) => {
                // debugger;
                setFormData((prevState) => {
                  return { ...prevState, date: e.target.value };
                });
              }}
            />
            <label htmlFor="res-time">Choose time</label>

            <select
              id="res-time"
              value={formData.time}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  time: e.target.value,
                }))
              }
            >
              {availableTimings.length > 0 ? (
                availableTimings.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))
              ) : (
                <option disabled>
                  No available times for the selected date.
                </option>
              )}

              {/* {availableTimings.map((el) => {
                return <option key={el}>{el}</option>;
              })} */}
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
                setFormData((prevState) => {
                  return { ...prevState, guests: e.target.value };
                })
              }
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formData.occassion}
              onChange={(e) =>
                setFormData((prevState) => {
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
              className="btn btn--reserve--page"
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
