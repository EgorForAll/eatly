// @flow
import * as React from "react";
import { IPost } from "@/interfaces/post";
import styles from "./article.module.scss";
import Tag from "@/components/ui/tag/tag";
import { ReactComponent as Star } from "@/assets/images/blog-star.svg";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "@/interfaces/user";
import axios from "axios";
import UserInfo from "@/components/blocks/user-info/user-info";

type TArticle = {
  post: IPost;
};

const Article: React.FC<TArticle> = ({ post }) => {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/users/${post.userId}?select=firstName,lastName,image,body`
      )
      .then(({ data }) => setUser(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <li className={styles.article}>
      <Link to={`/blog/${post.id}`} className={styles.linkToSinglePost}>
        <article>
          <header className={styles.header}>
            <h3 className={styles.title}>{post.title}</h3>
          </header>
          <div className={styles.widgets}>
            <UserInfo user={user} width={40} height={40}/>
            <div className={styles.rateWrapper}>
              <span className={styles.rate}>{post.reactions}</span>
              <Star/>
            </div>
          </div>
          <div className={styles.tagsWrapper}>
            {post.tags &&
                post.tags.map((item, index) => (
                    <Tag tag={item} key={index} tags={post.tags}/>
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
