import {IRecipes} from "@/interfaces/recipes";
import BurgerImage from "@/assets/images/burger.png";
import ChickenImage from "@/assets/images/chicken.png";
import BurgerImageWebp from "@/assets/images/burger.webp";
import ChickenImageWebp from "@/assets/images/chicken.webp"
import BurgerSmall from "@/assets/images/burger-small.png";
import ChickenSmall from "@/assets/images/chicken-small.png";

export const recipes: IRecipes[] = [
    {
        image: ChickenImage,
        image_small: ChickenSmall,
        webp: ChickenImageWebp,
        type: 'pizza',
        name: 'The Chicken King',
        time: 24,
        rate: 4.8
    },
    {
        image: BurgerImage,
        image_small: BurgerSmall,
        webp: BurgerImageWebp,
        type: 'pizza',
        name: 'The Burger King',
        time: 24,
        rate: 4.9
    },
    {
        image: ChickenImage,
        image_small: ChickenSmall,
        webp: ChickenImageWebp,
        type: 'pizza',
        name: 'The Chicken King',
        time: 24,
        rate: 4.8
    },
]