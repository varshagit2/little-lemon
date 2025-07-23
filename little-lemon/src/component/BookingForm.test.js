import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

import { fetchAPI } from './api';
jest.mock('./api', () => ({
  fetchAPI: jest.fn().mockReturnValue(['17:00', '18:00']),
}));

// BookingForm.test.js
test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});
