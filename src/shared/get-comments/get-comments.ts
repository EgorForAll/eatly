import axios from "axios";

export const getComments = async (id: string | undefined) =>
  await axios.get(`https://dummyjson.com/comments/post/${id}`);
