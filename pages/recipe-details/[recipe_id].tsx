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
import { formatString } from "../../utils/formatString";

const RecipeDetails: NextPage = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const recipe_id: string = router.query.recipe_id as string;

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
      <Layout >
        <Loading data-testid="loading"/>
      </Layout>
    );

  return (
    <Layout>
      <div data-testid="recipe" className={styles.recipe_container}>
        <Image
          src={`http:${recipe?.fields.photo.fields.file.url}`}
          alt="recipe"
          width={600}
          height={400}
        />
        <div className={styles.recipe_details}>
          <span className={`${styles.recipe_title} ${styles.recipe_span}`}>
            {formatString(recipe.fields.title, "with")[0]}
          </span>
          <span className={`${styles.recipe_subtitle} ${styles.recipe_span}`}>
            {formatString(recipe.fields.title, "with")[1]
              ? "With" + formatString(recipe.fields.title, "with")[1]
              : ""}
          </span>

          <div className={styles.field_container}>
            <span className={styles.field}>Chef Name:</span>{" "}
            <span>
              {recipe.fields.chef ? recipe.fields.chef.fields.name : "N/A"}
            </span>
          </div>
          <div className={styles.field_container}>
            <span className={styles.field}>Calories:</span>{" "}
            <span>
              {recipe.fields.calories ? recipe.fields.calories : "N/A"}
            </span>
          </div>

          <div className={styles.tags_container}>
            <span>
              {recipe.fields.tags
                ? recipe.fields.tags.map((tag) => (
                    <span key={tag.sys.id} className={styles.tags_span}>
                      {tag.fields.name.toUpperCase()}
                    </span>
                  ))
                : ""}
            </span>
          </div>
          <div className={styles.description}>{recipe.fields.description}</div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetails;
