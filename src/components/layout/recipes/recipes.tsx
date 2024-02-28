// @flow
import * as React from "react";
import styles from "./recipes.module.scss";
import { IRecipes } from "@/interfaces/recipes";
import MealCard from "@/components/blocks/meal-card/meal-card";
import { useEffect, useState } from "react";
import { getRecipes } from "@/shared/get-recipes/get-recipes";
import Loader from "@/components/ui/loader/loader";

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipes[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchRecipes = () => setLoading(true);
  getRecipes()
    .then(({ data }) => setRecipes(data.recipes))
    .catch((e) => {
      console.error(e);
      setError("Не удалось загрузить рецепты");
    })
    .finally(() => setLoading(false));

  useEffect(() => {
    fetchRecipes();
  }, []);

  const popularRecipes = recipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section id="recipes" className={styles.recipes}>
      <h2 className={styles.title}>
        Our Top <span className={styles.colored}>Recipes</span>
      </h2>
      <div className={styles.container}>
        {isLoading && <Loader />}
        {popularRecipes.length > 0 && (
          <ul className={styles.list}>
            {popularRecipes.map((item, index) => (
              <MealCard recipe={item} key={index} data-testid={"recipe-item"} />
            ))}
          </ul>
        )}
        {error && !recipes.length && (
          <h3 className={styles.notFound}>{error}</h3>
        )}
      </div>
    </section>
  );
};

export default Recipes;
