import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Components/Hero";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <Hero />
    </Router>
  );

  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});
