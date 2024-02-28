import axios from "axios";

export const getPosts = async () =>
  await axios.get(
    "https://dummyjson.com/posts?select=id,title,reactions,tags,body,userId"
  );
