import MealCard from "./meal-card";
import type {StoryObj} from "@storybook/react";
import BurgerImage from "../../../assets/images/burger.png";
import BurgerImageWebp from "../../../assets/images/burger.webp";
import BurgerSmall from "../../../assets/images/burger-small.png"

export default {
    title: 'Blocks/MealCard',
    component: MealCard
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/MealCard',
    component: MealCard,
    tags: ['autodocs'],
}
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        recipe: {
            name: 'The Burger King',
            type: 'Pizza',
            time: 24,
            rate: 4,
            image: BurgerImage,
            image_small: BurgerSmall,
            webp: BurgerImageWebp
        }
    },
};


