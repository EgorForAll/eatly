// @flow 
import * as React from 'react';
import styles from "./recipes.module.scss";
import {IRecipes} from "@/interfaces/recipes";
import MealCard from "@/components/blocks/meal-card/meal-card";
import {useEffect, useState} from "react";
import axios from "axios";


const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState < IRecipes[] | []> ([])

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes?select=name,image,tags,cookTimeMinutes,rating').then(({data}) => setRecipes(data.recipes)).catch((e) => console.log(e))
    }, []);

    const popularRecipes = recipes.sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <section id='recipes' className={styles.recipes}>
            <h2 className={styles.title}>Our Top <span className={styles.colored}>Recipes</span></h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {popularRecipes && popularRecipes.map((item, index) => <MealCard recipe={item} key={index} data-testid={'recipe-item'}/>)}
                </ul>
            </div>
        </section>
    );
};

export default Recipes;