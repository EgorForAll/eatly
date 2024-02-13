import {IRecipes} from "@/interfaces/recipes";
import {IOrders} from "@/interfaces/orders";
import {IPurchase} from "@/interfaces/purchases";
import BurgerImage from "@/assets/images/burger.png";
import ChickenImage from "@/assets/images/chicken.png";
import BurgerImageWebp from "@/assets/images/burger.webp";
import ChickenImageWebp from "@/assets/images/chicken.webp"
import BurgerSmall from "@/assets/images/burger-small.png";
import ChickenSmall from "@/assets/images/chicken-small.png";
import OrderChicken from "@/assets/images/food-small.png";
import OrderChickenWebp from "@/assets/images/food-small.webp";
import SweImage from "@/assets/images/swe.png";
import SweImageWebp from "@/assets/images/swe.webp";
import FishImage from "@/assets/images/fish.png";
import FishImageWebp from "@/assets/images/fish.webp";
import ExpenseIcon from "@/assets/images/expense.svg";
import VocherIcon from "@/assets/images/vocher.svg";

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

export const orders: IOrders[] = [
    {
        image: OrderChicken,
        imageWebp: OrderChickenWebp,
        name: 'Chicken Hell',
        status: 'On The Way',
        time: '3:09 PM',
        is_fail: false
    },
    {
        image: SweImage,
        imageWebp: SweImageWebp,
        name: 'Swe Dish',
        status: 'Delivered',
        time: 'Yesterday',
        is_fail: false
    },
    {
        image: FishImage,
        imageWebp: FishImageWebp,
        name: 'Fish Hell Veg',
        status: 'Cancelled',
        time: 'Yesterday',
        is_fail: true
    }
]

export const purchases: IPurchase[] = [
    {
        type: 'Expense',
        changing: 'Increased By 10%',
        price: 409.00,
        icon: ExpenseIcon,
        progress: 72
    },
    {
        type: 'Vocher Usage',
        changing: 'Increased By 5%',
        price: 45.78,
        icon: VocherIcon,
        progress: 60
    }
]