/**
 * @jest-environment jsdom
 */
import FIXTURES from "./fixtures";
import { render, screen } from "@testing-library/react";
import Error from "../components/Error";

describe("Error", () => {
  test("should render error message", () => {
    render(<Error errorMessage={FIXTURES.props.error}/>);

    const component = screen.getByTestId("error");
    const errorDisplay = screen.getByText(/some error/i);
    expect(component).toBeInTheDocument();
    expect(errorDisplay).toBeInTheDocument();
  });
});
