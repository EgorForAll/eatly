// @flow 
import * as React from 'react';
import styles from "./recipes.module.scss";
import {IRecipes} from "@/interfaces/recipes";
import MealCard from "@/components/blocks/meal-card/meal-card";

type TRecipes = {
    recipes: IRecipes[]
};

const Recipes: React.FC<TRecipes> = ({recipes}) => {

    return (
        <section className={styles.recipes}>
            <h2 className={styles.title}>Our Top <span className={styles.colored}>Recipes</span></h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {recipes && recipes.map((item, index) => <MealCard recipe={item} key={index}/>)}
                </ul>
                <div className={styles.viewAll}>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>
        </section>
    );
};

export default Recipes;