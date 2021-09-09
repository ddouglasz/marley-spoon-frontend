/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";

describe("Loading", () => {
  test("should render loading component", () => {
    render(<Loading />);

    const component = screen.getByTestId("loading");
    expect(component).toBeInTheDocument();
  });
});
