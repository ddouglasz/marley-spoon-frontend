import type { NextPage } from "next";
import styles from "../../styles/recipe.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getRecipe } from "../../api/recipes";
import { IRecipe } from "../../types/recipes.types";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const RecipeDetails: NextPage = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const { recipe_id }: any = router.query!; // TODO- fix type issue

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

  return (
    <Layout>
      <div className={styles.recipe}>{recipe.fields.title}</div>
    </Layout>
  );
};

export default RecipeDetails;
