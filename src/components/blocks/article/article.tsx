// @flow
import * as React from "react";
import { IPost } from "@/interfaces/post";
import styles from "./article.module.scss";
import Tag from "@/components/ui/tag/tag";
import { ReactComponent as Star } from "@/assets/images/blog-star.svg";
import { useRef } from "react";
import TextTruncate from "react-text-truncate"; // recommend

type TArticle = {
  post: IPost;
};

const Article: React.FC<TArticle> = ({ post }) => {
  return (
    <li className={styles.article}>
      <article>
        <header className={styles.header}>
          <h3 className={styles.title}>{post.title}</h3>
        </header>
        <div className={styles.widgets}>
          <div className={styles.tagsWrapper}>
            {post.tags &&
              post.tags.map((item, index) => (
                <Tag tag={item} key={index} tags={post.tags} />
              ))}
          </div>
          <div className={styles.rateWrapper}>
            <span className={styles.rate}>{post.reactions}</span>
            <Star />
          </div>
        </div>
        <TextTruncate
          element="p"
          line={3}
          truncateText="..."
          text={post.body}
        />
      </article>
    </li>
  );
};

export default Article;
