// @flow
import * as React from "react";
import { IRecipes } from "@/interfaces/recipes";
import styles from "./meal-card.module.scss";
import { useEffect, useRef, useState } from "react";
import Bookmark from "../../ui/bookmark/bookmark";

interface IMealCard {
  recipe: IRecipes;
}

const MealCard: React.FC<IMealCard> = ({ recipe }) => {
  const [isHover, setHover] = useState(false);
  const cardRef = useRef<HTMLLIElement>(null);
  const bookMarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHover) {
      cardRef?.current?.classList.remove(styles.itemMovedDown);
      setTimeout(
        () => cardRef?.current?.classList.add(styles.itemMovedUp),
        100
      );
    } else {
      cardRef?.current?.classList.remove(styles.itemMovedUp);
      cardRef?.current?.classList.add(styles.itemMovedDown);
    }
  }, [isHover]);

  useEffect(() => {
    if (isHover) {
      bookMarkRef?.current?.classList.remove(styles.opacityOut);
      bookMarkRef?.current?.classList.add(styles.opacityIn);
    } else {
      bookMarkRef?.current?.classList.remove(styles.opacityIn);
      bookMarkRef?.current?.classList.add(styles.opacityOut);
    }
  }, [isHover]);

  return (
    <li
      className={styles.item}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={cardRef}
      data-testid={'meal-card'}
    >
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={recipe.image}
          alt={recipe.name}
          loading={'lazy'}
          width={400}
          height={400}
          sizes="(max-width: 992px) 250px"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <div className={styles.tags}>
            {recipe.tags.slice(0, 4).map((item, index) => (
              <span className={styles.type} key={index}>
                {item}
              </span>
            ))}
          </div>
          <h3 className={styles.name}>{recipe.name}</h3>
          <div className={styles.widgets}>
            <span className={styles.text}>{recipe.cookTimeMinutes}min</span>
            <span className={styles.text}>{recipe.rating}</span>
          </div>
        </div>
        <div ref={bookMarkRef} className={styles.right} data-testid={'bookmark'} >
          <Bookmark/>
        </div>
      </div>
    </li>
  );
};

export default MealCard;
