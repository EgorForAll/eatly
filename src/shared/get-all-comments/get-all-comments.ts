import axios from "axios";

export const getAllComments = async () => await axios.get("https://dummyjson.com/comments")