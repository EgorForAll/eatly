// @flow
import * as React from "react";
import { IPost } from "@/interfaces/post";
import { IPostUser } from "@/interfaces/post-user";
import styles from "./article.module.scss";
import Tag from "@/components/ui/tag/tag";
import { ReactComponent as Star } from "@/assets/images/blog-star.svg";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "@/interfaces/user";
import axios from "axios";
import UserInfo from "@/components/blocks/user-info/user-info";
import { getFromLs } from "@/utils/utils";
import { getUser } from "@/shared/get-user/get-user";

type TArticle = {
  post: IPost;
};

const Article: React.FC<TArticle> = ({ post }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<boolean>(false);

  // В данном компоненте предусмотрено кэширование пользователей. В localStorage сохраняется массив из объектов, по которым можно определить за каким пользователем какой пост закреплен. При повторном рендеринге, тем самым, запрос не происходит, а данные о пользователе берутся из этого массива.

  const fetchUser = async () => {
    getUser(post.id)
      .then(({ data }) => {
        setUser(data);
        const userPost: IPostUser = {
          postId: post.id,
          user: data,
        };
        const userPostsJson = localStorage.getItem("user_posts");
        if (userPostsJson) {
          const userPostsArr = JSON.parse(userPostsJson);
          const postUserArrUpdated: IPostUser[] = [...userPostsArr, userPost];
          localStorage.setItem(
            "user_posts",
            JSON.stringify(postUserArrUpdated)
          );
        }
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    const currentPost = getFromLs(post.id);
    if (currentPost) {
      setUser(currentPost.user);
    } else {
      fetchUser();
    }
  }, []);

  return (
    <li className={styles.article}>
      <Link to={`/blog/${post.id}`} className={styles.linkToSinglePost}>
        <article>
          <header className={styles.header}>
            <h3 className={styles.title}>{post.title}</h3>
          </header>
          <div className={styles.widgets}>
            {!error ? (
              <UserInfo user={user} width={40} height={40} />
            ) : (
              <span style={{ color: "red" }}>Не удалось найти автора</span>
            )}
            <div className={styles.rateWrapper}>
              <span className={styles.rate}>{post.reactions}</span>
              <Star />
            </div>
          </div>
          <div className={styles.tagsWrapper}>
            {post.tags &&
              post.tags.map((item, index) => (
                <Tag tag={item} key={index} tags={post.tags} />
              ))}
          </div>
          <TextTruncate
            element="p"
            line={3}
            truncateText="..."
            text={post.body}
          />
        </article>
      </Link>
    </li>
  );
};

export default Article;
