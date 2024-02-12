// @flow 
import * as React from 'react';
import styles from "./recipes.module.scss";
import {IRecipes} from "@/interfaces/recipes";
// @ts-ignore
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

type TRecipes = {
    recipes: IRecipes[]
};

const Recipes: React.FC<TRecipes> = ({recipes}) => {
    return (
        <section className={styles.recipes}>
            <h2 className={styles.title}>Our Top <span className={styles.colored}>Recipes</span></h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {recipes && recipes.map((item, index) => <li key={index} className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <ResponsiveImage className={styles.image}>
                                <ResponsiveImageSize minWidth={0} path={item.image_small} />
                                <ResponsiveImageSize default minWidth={992} path={item.image} />
                            </ResponsiveImage>
                        </div>
                        <div className={styles.description}>
                            <span className={styles.type}>{item.type}</span>
                            <h3 className={styles.name}>{item.name}</h3>
                            <div className={styles.widgets}>
                                <span className={styles.text}>{item.time}min</span>
                                <span className={styles.text}>{item.rate}</span>
                            </div>
                        </div>
                    </li>)}
                </ul>
                <div className={styles.viewAll}>
                    <button className={styles.btn}>View All</button>
                </div>
            </div>
        </section>
    );
};

export default Recipes;