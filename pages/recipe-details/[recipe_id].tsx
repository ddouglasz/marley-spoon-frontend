import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getRecipe } from "../../api/recipes";
import { IRecipe } from "../../types/recipes.types";

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

  if (error) return <div>An Error Occured{error}</div>; //TODO - Make error component

  if (!recipe) { //TODO - Make loading component
    return (
      <Layout>
        <div>Loading...</div> 
      </Layout>
    );
  }

  return (
    <Layout>
      <div>{recipe.fields.title}</div>
    </Layout>
  );
};

export default RecipeDetails;
