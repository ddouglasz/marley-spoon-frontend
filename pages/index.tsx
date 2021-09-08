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
import Loading from "../components/Loading";
import Error from "../components/Error";
import { formatString } from "../utils/FormatString";

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


  if (error) return <Error errorMessage={error} />;

  if (!recipes.length) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.recipelist}>
        <ul className={styles.recipes}>
          {recipes.map((recipe: IRecipe) => (
            <Card classes={styles.card} key={recipe.sys.id}>
              <li className={styles.zoom} key={recipe.sys.id}>
                <Link href={`/recipe-details/${recipe.sys.id}`} passHref>
                  <Image
                    src={`http:${recipe.fields.photo.fields.file.url}`}
                    alt="recipe"
                    width={400}
                    height={300}
                  />
                </Link>
                <h3 className={styles.card_title}>
                  {formatString(recipe.fields.title, "with")[0]}
                </h3>
                <h4 className={styles.card_title}>
                  {formatString(recipe.fields.title, "with")[1]
                    ? "With" + formatString(recipe.fields.title, "with")[1]
                    : ""}
                </h4>
              </li>
            </Card>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RecipeList;
