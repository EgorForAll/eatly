import axios from "axios";

export const getPost = async (id: string | undefined) =>
  await axios.get(`https://dummyjson.com/post/${id}`);
