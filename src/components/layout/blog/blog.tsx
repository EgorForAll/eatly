// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import styles from "./blog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/features/posts";
import axios from "axios";
import { RootState } from "@/assets/store";
import Article from "@/components/blocks/article/article";
import Pagination from "@/components/blocks/pagination/pagination";
import {IRequest} from "@/interfaces/request";
import Loader from "@/components/ui/loader/loader";

const URL = "https://dummyjson.com/posts?select=id,title,reactions,tags,body";
const BLOGS_PER_PAGE = 12;
const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastIndex, setLastIndex] = useState(BLOGS_PER_PAGE);
  const [firstIndex, setFirstIndex] = useState(0);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();
  const loadPosts = (data: IRequest) => dispatch(fetchPosts(data))

  useEffect(() => {
    axios.get(URL).then(({ data }) => loadPosts(data));
  }, []);

  const currentBlogs = posts?.slice(firstIndex, lastIndex);

  const toggleNext = (page: number) => {
    setCurrentPage(page);
    setFirstIndex(currentPage * BLOGS_PER_PAGE);
    setLastIndex(firstIndex + BLOGS_PER_PAGE * 2);
    window.scrollTo(0, 0)
  };

  const togglePrev = (page: number) => {
    setCurrentPage(page);
    setFirstIndex(firstIndex - BLOGS_PER_PAGE);
    setLastIndex(firstIndex);
    window.scrollTo(0, 0)
  };

  return (
    <section className={styles.blog}>
      <h1 className={styles.mainTitle}>
        <span className={styles.colored}>Latest</span> Articles{" "}
      </h1>
      <div className={styles.container}>
        <ul className={styles.list}>
          {currentBlogs &&
            currentBlogs.map((item, index) => (
              <Article post={item} key={index} />
            ))}
        </ul>
        {!currentBlogs ?  <Loader/> : null}
        {currentBlogs && <Pagination
            currentPage={currentPage}
            toggleNext={toggleNext}
            togglePrev={togglePrev}
            lastIndex={lastIndex}
        />}
      </div>
    </section>
  );
};

export default Blog;
