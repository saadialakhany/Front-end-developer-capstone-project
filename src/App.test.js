import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Hero from "./Components/Hero";
import { fetchAPI } from "./mockAPI";
import { Reservation } from "./Components/Reservation";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders the BookingForm heading", () => {
  render(<Hero />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});
