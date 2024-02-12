// @flow
import * as React from 'react';
import {IRecipes} from "@/interfaces/recipes";
import {ResponsiveImage, ResponsiveImageSize} from "react-responsive-image";
import styles from "./meal-card.module.scss";
import {useRef} from "react";
import useAnimation from "@/custom-hooks/useHover";

interface IMealCard{
    recipe: IRecipes;
}


const MealCard: React.FC<IMealCard> = ({recipe}) => {
    const cardRef = useRef<HTMLLIElement | null>();
    const {isHover,  setHover} = useAnimation(styles.itemMovedUp, styles.itemMovedDown, cardRef);
    return (
        <li
            className={isHover ? styles.itemMovedUp : styles.itemMovedDown}
            onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={styles.imageWrapper}>
                <ResponsiveImage className={styles.image}>
                    <ResponsiveImageSize minWidth={0} path={recipe.image_small}/>
                    <ResponsiveImageSize default minWidth={992} path={recipe.image}/>
                </ResponsiveImage>
            </div>
            <div className={styles.description}>
                <span className={styles.type}>{recipe.type}</span>
                <h3 className={styles.name}>{recipe.name}</h3>
                <div className={styles.widgets}>
                    <span className={styles.text}>{recipe.time}min</span>
                    <span className={styles.text}>{recipe.rate}</span>
                </div>
            </div>
        </li>
    );
};

export default MealCard;