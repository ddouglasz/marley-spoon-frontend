/**
 * @jest-environment jsdom
 */
import React, { useState } from "react";
const reactMock = require("react");
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import RecipeList from "../pages/index";
import FIXTURES from "./fixtures";
import * as recipeApi from "../api/recipes";

import { setHookState } from "./hooksState";

(recipeApi.getRecipes as jest.Mock) = jest
  .fn()
  .mockReturnValue(
    new Promise((resolve) => resolve(FIXTURES.mockedEntries.entries))
  );

describe("RecipeList page", () => {
  test("render recipe list in document", async () => {
    await act(async () => render(<RecipeList />));
    const spy = jest.spyOn(recipeApi, 'getRecipes');
    expect(spy).toHaveBeenCalled();
    expect(screen.getByTestId("recipe")).toBeInTheDocument();
  });
  test("renders loading component when no recipes data", async () => {
    (recipeApi.getRecipes as jest.Mock) = jest
      .fn()
      .mockReturnValue(new Promise((resolve) => resolve([])));

      await act(async () => render(<RecipeList />));
    await expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
