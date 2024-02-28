// @flow
import * as React from "react";
import styles from "./single-post.module.scss";
import { useEffect, useState } from "react";
import { IPost } from "@/interfaces/post";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { IUser } from "@/interfaces/user";
import Loader from "@/components/ui/loader/loader";
import BlogInfo from "@/components/blocks/blog-info/blog-info";
import { ReactComponent as Arrow } from "@/assets/images/arrow-left.svg";
import { getFromLs } from "@/utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/assets/store";
import { setCurrentPost } from "@/features/posts/posts";
import { getUser } from "@/shared/get-user/get-user";
import { getPost } from "@/shared/get-post/get-post";

type TSinglePost = {
  id: string | undefined;
};

const SinglePost: React.FC<TSinglePost> = ({ id }) => {
  const post = useSelector((state: RootState) => state.posts.currentPost);
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser | null>(null);
  const [errorUser, setErrorUser] = useState<string>("");
  const [errorPost, setErrorPost] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSetCurrentPost = (data: IPost | null) =>
    dispatch(setCurrentPost(data));


  // В данном компоненте производится проверка на наличие ифнормации о пользователе localStorage. Если его нет в localStorage, то производится запрос на сервер

  useEffect(() => {
    setLoading(true);
    setErrorPost("");
    setErrorUser("");
    getPost(id)
      .then(({ data }) => onSetCurrentPost(data))
      .catch(() => setErrorPost("Не удается загрузить пост"))
      .finally(() => setLoading(false));
    const currentPost = getFromLs(Number(id));
    if (currentPost) {
      setUser(currentPost.user);
    } else {
      getUser(id)
        .then(({ data }) => setUser(data))
        .catch(() => setErrorUser("Не удается загрузить автора"));
    }

    return () => {
      onSetCurrentPost(null);
    };
  }, [id]);

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        {isLoading ? <Loader /> : null}
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
        ) : (
          <>
            {errorPost ? <h2 className={styles.error}>{errorPost}</h2> : null}
            {errorUser ? <h2 className={styles.error}>{errorUser}</h2> : null}
          </>
        )}
      </div>
    </section>
  );
};

export default SinglePost;
