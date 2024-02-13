// @flow
import * as React from 'react';
import {IRecipes} from "@/interfaces/recipes";
import {ResponsiveImage, ResponsiveImageSize} from "react-responsive-image";
import styles from "./meal-card.module.scss";
import {useEffect, useRef, useState} from "react";

interface IMealCard{
    recipe: IRecipes;
}

const MealCard: React.FC<IMealCard> = ({recipe}) => {
    const [isHover, setHover] = useState(false);
    const cardRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (isHover) {
            cardRef?.current?.classList.remove(styles.itemMovedDown)
            setTimeout(() => cardRef?.current?.classList.add(styles.itemMovedUp), 100)
        } else {
            cardRef?.current?.classList.remove(styles.itemMovedUp)
            cardRef?.current?.classList.add(styles.itemMovedDown)
        }
    }, [isHover])

    return (
        <li className={styles.item} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} ref={cardRef}>
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