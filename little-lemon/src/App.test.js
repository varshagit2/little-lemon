import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { fetchAPI } from "./component/api";


jest.mock('./component/api', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00']),
}));

