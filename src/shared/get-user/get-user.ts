import axios from "axios";

export const getUser = async (id: string | undefined | number) =>
  await axios.get(
    `https://dummyjson.com/users/${id}?select=firstName,lastName,image`
  );
