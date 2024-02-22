// @flow
import * as React from "react";
import styles from "./single-post.module.scss";
import { useEffect, useState } from "react";
import { IPost } from "@/interfaces/post";
import axios from "axios";
import { Link } from "react-router-dom";
import { IUser } from "@/interfaces/user";
import Loader from "@/components/ui/loader/loader";
import BlogInfo from "@/components/blocks/blog-info/blog-info";
import { ReactComponent as Arrow } from "@/assets/images/arrow-left.svg";
import {IPostUser} from "@/interfaces/post-user";

type TSinglePost = {
  id: string | undefined;
};

const SinglePost: React.FC<TSinglePost> = ({ id }) => {
  const [post, setPost] = useState<IPost | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

    // В данном компоненте производится проверка на наличие ифнормации о пользователе в в localStorage. Если его нет в localStorage, то производится запрос на сервер

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then(({ data }) => {
        setPost(data);

          const userPostsJson: any = localStorage.getItem("user_posts");
          if (userPostsJson) {
              const userPostsArr: IPostUser[] = JSON.parse(userPostsJson);
              const currentPost = userPostsArr.find((item) => item.postId === Number(id));

              if (currentPost) {
                  setUser(currentPost.user);
                  return;
              }
              return;
          }

        axios
          .get(
            `https://dummyjson.com/users/${data.userId}?select=firstName,lastName,image`
          )
          .then(({ data }) => setUser(data))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        {!post || !user ? <Loader /> : null}
        {post && user ? (
          <>
            <article>
              <h2 className={styles.title}>{post?.title}</h2>
              <BlogInfo user={user} post={post} />
              <p className={styles.text}>{post.body}</p>
            </article>
            <div className={styles.linkWrapper}>
              <Link to={"/blog"} className={styles.backBlogs}>
                <Arrow /> <span>All Articles</span>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default SinglePost;
