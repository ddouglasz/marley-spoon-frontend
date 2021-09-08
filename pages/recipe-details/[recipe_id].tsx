import type { NextPage } from "next";
import styles from "../../styles/recipe.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getRecipe } from "../../api/recipes";
import { IRecipe } from "../../types/recipes.types";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Image from "next/image";
import Card from "../../components/Card";
import { formatString } from "../../utils/FormatString";

const RecipeDetails: NextPage = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const { recipe_id }: any = router.query!; // TODO- provide proper type

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const recipeData = await getRecipe(recipe_id);

        setRecipe(recipeData);
      } catch (error) {
        setError(error);
      }
    }

    fetchRecipe();
  }, [recipe_id]);

  if (error) return <Error errorMessage={error} />;

  if (!recipe)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  console.log(recipe.fields.tags);

  return (
    <Layout>
      <div className={styles.recipe_container}>
        <Image
          src={`http:${recipe.fields.photo.fields.file.url}`}
          alt="recipe"
          width={600}
          height={400}
        />
        <div>
          <span className={`${styles.recipe_title} ${styles.recipe_span}`}>
            {formatString(recipe.fields.title, "with")[0]}
          </span>
          <span className={`${styles.recipe_subtitle} ${styles.recipe_span}`}>
            {formatString(recipe.fields.title, "with")[1]
              ? "With" + formatString(recipe.fields.title, "with")[1]
              : ""}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetails;
