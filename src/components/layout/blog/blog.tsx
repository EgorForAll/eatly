// @flow
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./blog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/features/posts/posts";
import { RootState } from "src/assets/store";
import Article from "@/components/blocks/article/article";
import Pagination from "@/components/blocks/pagination/pagination";
import { IRequest } from "@/interfaces/request";
import Loader from "@/components/ui/loader/loader";
import { getPosts } from "@/shared/get-posts/get-posts";


const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState<string>("");
  const scrollTo = useRef<HTMLHeadingElement>(null);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  const addToRedux = (data: IRequest) => dispatch(fetchPosts(data));

  const getPostsFromServer = (page: number) =>
    getPosts(page)
      .then(({ data }) => {
        addToRedux(data);
        setError("");
      })
      .catch((e: { message: React.SetStateAction<string> }) =>
        setError(e.message)
      );

  useEffect(() => {
    const postsUsersJson = localStorage.getItem("user_posts");
    if (!postsUsersJson) {
      localStorage.setItem("user_posts", JSON.stringify([]));
    }
    getPostsFromServer(currentPage)
  }, [currentPage]);


  const onScrollTop = () => {
    if (scrollTo.current) {
      scrollTo.current.scrollIntoView();
    }
  };

  const toggleNext = () => {
    onScrollTop();
    setCurrentPage((prev) => prev + 1);
  };

  const togglePrev = () => {
    onScrollTop();
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className={styles.blog}>
      <h1 className={styles.mainTitle} ref={scrollTo}>
        <span className={styles.colored}>Latest</span> Articles{" "}
      </h1>
      <div className={styles.container}>
        <ul className={styles.list}>
          {posts &&
            posts.map((item, index) => (
              <Article post={item} key={index} />
            ))}
        </ul>
        {error ? <h2 className={styles.error}>{error}</h2> : null}
        {!posts && !error ? <Loader /> : null}
        {posts && (
          <Pagination
            currentPage={currentPage}
            toggleNext={toggleNext}
            togglePrev={togglePrev}
            posts={posts}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
