// @flow
import * as React from "react";
import styles from "./recipes.module.scss";
import { IRecipes } from "@/interfaces/recipes";
import MealCard from "@/components/blocks/meal-card/meal-card";
import { useEffect, useState } from "react";
import axios from "axios";
import { getRecipes } from "@/shared/get-recipes/get-recipes";

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipes[] | []>([]);

  const fetchRecipes = () =>
    getRecipes()
      .then(({ data }) => setRecipes(data.recipes))
      .catch((e) => console.error(e));

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
        {popularRecipes.length > 0 ? (
          <ul className={styles.list}>
            {popularRecipes.map((item, index) => (
              <MealCard recipe={item} key={index} data-testid={"recipe-item"} />
            ))}
          </ul>
        ) : (
          <h3 className={styles.notFound}>Рецепты не найдены</h3>
        )}
      </div>
    </section>
  );
};

export default Recipes;
