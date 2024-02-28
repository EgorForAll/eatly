import axios from "axios";

export const getRecipes = async () =>
  axios.get(
    "https://dummyjson.com/recipes?select=name,image,tags,cookTimeMinutes,rating"
  );
