import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipes";
import Layout from "../components/Layout";
import { IRecipes } from "../types/recipes.types";

const RecipeList: NextPage = () => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);
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

  console.log(recipes);

  if (error) return <div>{error}</div>;

  if (!recipes.length) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="">
        <ul>
          {recipes.map((recipe: any, i: number) => (
            <>
              <Image
                src={`http:${recipe.fields.photo.fields.file.url}`}
                alt="recipe"
                width={400}
                height={300}
              />
              <li key={i}>{recipe.fields.title}</li>
            </>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RecipeList;
