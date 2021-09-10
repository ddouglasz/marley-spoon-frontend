/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";
 import Footer from "../components/Footer";
 
 describe("Footer component", () => {
   test("renders footer component with text", () => {
     render(<Footer />);
     const headerLinkElement = screen.getByText(/Marley Spoon/i);
     expect(headerLinkElement).toBeInTheDocument();
   });
 });
 