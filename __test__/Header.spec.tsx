/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  test("renders Header component with text", () => {
    render(<Header />);
    const headerLinkElement = screen.getByText(/Marley Spoon/i);
    const subheaderElement = screen.getByText(/Simple and Healthy Recipes/i);
    expect(headerLinkElement).toBeInTheDocument();
    expect(subheaderElement).toBeInTheDocument();
  });
});
