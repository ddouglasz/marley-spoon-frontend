/**
 * @jest-environment jsdom
 */
import React from "react";
import FIXTURES from "./fixtures";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Dropdown", () => {
  test("should render card and passed children", () => {
    render(<Card classes="">{FIXTURES.children.childrenProps}</Card>);

    const component = screen.getByTestId("card");
    const mockedChildrenText = screen.getByText(/Simple mock/i);
    expect(component).toBeInTheDocument();
    expect(mockedChildrenText).toBeInTheDocument();
  });
});
