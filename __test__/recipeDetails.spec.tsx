/**
 * @jest-environment jsdom
 */
import React, { useState } from "react";
const reactMock = require("react");
import {
  act,
  render,
  screen,
} from "@testing-library/react";
import RecipeDetails from "../pages/recipe-details/[recipe_id]";
import FIXTURES from "./fixtures";
import * as recipeApi from "../api/recipes";

(recipeApi.getRecipe as jest.Mock) = jest
  .fn()
  .mockReturnValue(
    new Promise((resolve) => resolve(FIXTURES.mockedEntries.entry))
  );

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: {
        recipe_id: "1234566",
      },
    };
  },
}));

describe("RecipeList page", () => {
  test("render recipe detail in document", async () => {
    await act(async () => render(<RecipeDetails />));
    const spy = jest.spyOn(recipeApi, "getRecipe");
    expect(spy).toHaveBeenCalled();
    expect(screen.getByTestId("recipe")).toBeInTheDocument();
  });
  test("renders loading component when no recipe data", async () => {
    (recipeApi.getRecipe as jest.Mock) = jest
      .fn()
      .mockReturnValue(new Promise((resolve) => resolve(null)));

    await act(async () => render(<RecipeDetails />));
    await expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
