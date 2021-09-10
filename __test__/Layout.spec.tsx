/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import FIXTURES from "./fixtures";

describe("Layout", () => {
  test("should render app layout", () => {
    render(<Layout>{FIXTURES.children.childrenProps}</Layout>);

    const layoutComponent = screen.getByTestId("layout");
    expect(layoutComponent).toBeInTheDocument();
  });
});
