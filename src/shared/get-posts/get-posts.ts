import axios from "axios";

export const getPosts = async (page: number) => {
  if (page === 0) {
    return await axios.get(
      "https://dummyjson.com/posts?limit=12&select=id,title,reactions,tags,body,userId"
    );
  } else {
    return await axios.get(
      `https://dummyjson.com/posts?limit=12&skip=${
        page * 12
      }&select=id,title,reactions,tags,body,userId`
    );
  }
};
