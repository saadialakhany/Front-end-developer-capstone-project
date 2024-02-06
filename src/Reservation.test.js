import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { BookingForm } from "../src/Components/Reservation";
import * as mockAPI from "./mockAPI";

// Mock the fetchAPI function
jest.mock("./mockAPI", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
  getLocalStorage: jest.fn(),
}));

/////////////////////////////////
// Testing for Form Validations:

describe("BookingForm", () => {
  it("has correct attributes on the guests input field", () => {
    const { getByLabelText } = render(
      <Router>
        <BookingForm />
      </Router>
    );
    //Date Input:
    const dateInput = getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("id", "res-date");

    fireEvent.change(dateInput, { target: { value: "2024-02-15" } });
    expect(dateInput.value).toBe("2024-02-15");

    //Guest Input:
    const guestsInput = getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("placeholder", "1");

    //Occassion Input:
    const occasionInput = getByLabelText("Occasion");
    expect(occasionInput).toHaveAttribute("id", "occasion");
    fireEvent.change(occasionInput, { target: { value: "Wedding" } });
    expect(occasionInput.value).toBe("Wedding");
  });
});

// Time input:
describe("BookingForm", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <Router>
        <BookingForm />
      </Router>
    );
    expect(getByText("Reserve Table")).toBeInTheDocument();
  });

  it("updates the state when a date is selected", async () => {
    const { getByLabelText, findByText } = render(
      <Router>
        <BookingForm />
      </Router>
    );

    fireEvent.change(getByLabelText("Choose date"), {
      target: { value: "2024-02-10" },
    });

    await waitFor(() => {
      // Replace 'Loading times...' with the text or element that appears after a date is selected
      expect(findByText("14:00"));
    });
  });
});
