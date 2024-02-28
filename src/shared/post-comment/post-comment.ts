import axios from "axios";
import {IPostComment} from "@/interfaces/post-comment";

const headers = {
  "Content-Type": "application/json",
};

export const postComment = async (data: IPostComment) =>
  await axios.post("https://dummyjson.com/comments/add", data, {
    headers: headers,
  });
