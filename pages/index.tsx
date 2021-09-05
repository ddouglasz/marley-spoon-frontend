import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getRecipes } from "./api/recipes";
import Layout from "../components/Layout";

const RecipeList: NextPage = () => {
  const [recipes, setRecipes] = useState<any>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipesData = await getRecipes();

        setRecipes(recipesData);
      } catch (error) {
        setError(error);
      }
    }

    fetchRecipes();
  }, []);

  if (!recipes.length) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <ul>
          {recipes.map((recipe: any,i) => (
            <li key={i}>{recipe.fields.title}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RecipeList;
