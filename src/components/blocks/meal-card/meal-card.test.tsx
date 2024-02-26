import {screen, render, fireEvent} from "@testing-library/react";
import MealCard from "./meal-card";
import '@testing-library/jest-dom'
import {IRecipes} from "@/interfaces/recipes";
import styles from "./meal-card.module.scss";

const recipe: IRecipes =
  {
    id: 30,
    name: "Brazilian Caipirinha",
    image: "https://cdn.dummyjson.com/recipe-images/30.webp",
    tags: ["Caipirinha", "Brazilian", "Cocktail"],
    cookTimeMinutes: 0,
    rating: 4.4,
  }

describe("Meal card component", () => {
    it('Meal card renders', () => {
        render(<MealCard recipe={recipe} />)
        const mealCard = screen.getByTestId('meal-card')
        expect(mealCard).toBeInTheDocument()
    })
    it('meal card can be animate on hover', () => {
        render(<MealCard recipe={recipe} />)
        const mealCard = screen.getByTestId('meal-card');
        fireEvent.mouseOver(mealCard);
        expect(mealCard.classList.contains(styles.itemMovedDown)).toBe(false)
        setTimeout(() => {
            expect(mealCard.classList.contains(styles.itemMovedUp)).toBe(true)
        }, 100)
    })
    it('bookmark renders', () => {
        render(<MealCard recipe={recipe} />)
        const bookmark = screen.getByTestId('bookmark')
        expect(bookmark).toBeInTheDocument()
    })
    it('bookmark can be animate on hover', () => {
        render(<MealCard recipe={recipe} />)
        const mealCard = screen.getByTestId('meal-card');
        const bookmark = screen.getByTestId('bookmark')
        fireEvent.mouseOver(mealCard);
        expect(bookmark.classList.contains(styles.opacityIn)).toBe(true)
        expect(bookmark.classList.contains(styles.opacityOut)).toBe(false)
    })
});
