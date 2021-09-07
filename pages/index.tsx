import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipes";
import Layout from "../components/Layout";
import { IRecipe } from "../types/recipes.types";

const RecipeList: NextPage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
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
          {recipes.map((recipe: IRecipe) => (
            <li
              key={recipe.sys.id}
            >
              <Link href={`/recipe-details/${recipe.sys.id}`} passHref>
                <Image
                  src={`http:${recipe.fields.photo.fields.file.url}`}
                  alt="recipe"
                  width={400}
                  height={300}
                />
              </Link>
              {recipe.fields.title}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RecipeList;
