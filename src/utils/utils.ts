import { IPostUser } from "@/interfaces/post-user";

export const detectFirefox = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  return userAgent.indexOf("firefox") > -1;
};

export const getFromLs = (id: number) => {
    const userPostsJson: any = localStorage.getItem("user_posts");

    if (userPostsJson) {
        const userPostsArr: IPostUser[] = JSON.parse(userPostsJson);

        return userPostsArr.find(
            (item: IPostUser) => item.postId === Number(id)
        )
    }
}