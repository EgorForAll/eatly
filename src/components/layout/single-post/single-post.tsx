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
import Comments from "@/components/layout/comments/comments";

type TSinglePost = {
  id: string | undefined;
};

const SinglePost: React.FC<TSinglePost> = ({ id }) => {
  const [post, setPost] = useState<IPost | null>(null);
  const [user, setsUser] = useState<IUser | null>(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
        axios
          .get(
            `https://dummyjson.com/users/${data.userId}?select=firstName,lastName,image`
          )
          .then(({ data }) => setsUser(data))
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
