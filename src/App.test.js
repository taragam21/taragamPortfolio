import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("Rendering App Component....", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tarabai GAMBARA/i);
  expect(linkElement).toBeInTheDocument();
});
