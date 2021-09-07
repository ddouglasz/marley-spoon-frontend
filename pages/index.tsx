import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipes";
import Layout from "../components/Layout";
import { IRecipe } from "../types/recipes.types";
import styles from "../styles/index.module.css";
import Card from "../components/Card";

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
      <div className={styles.recipelist}>
        <ul className={styles.recipes}>
          {recipes.map((recipe: IRecipe) => (
            <Card key={recipe.sys.id}>
              <li
                className={`${styles.card} ${styles.zoom}`}
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
                <p>{recipe.fields.title}</p>
              </li>
            </Card>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RecipeList;
