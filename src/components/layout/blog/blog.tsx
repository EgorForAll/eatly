// @flow
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import styles from "./blog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/features/posts";
import axios from "axios";
import { RootState } from "@/assets/store";
import Article from "@/components/blocks/article/article";
import Pagination from "@/components/blocks/pagination/pagination";
import { IRequest } from "@/interfaces/request";
import Loader from "@/components/ui/loader/loader";

const URL = "https://dummyjson.com/posts?select=id,title,reactions,tags,body,userId";
const BLOGS_PER_PAGE = 12;
const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastIndex, setLastIndex] = useState(BLOGS_PER_PAGE);
  const [firstIndex, setFirstIndex] = useState(0);
  const scrollTo = useRef<HTMLHeadingElement>(null)
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  const loadPosts = (data: IRequest) => dispatch(fetchPosts(data));

  useEffect(() => {
    const postsUsersJson = localStorage.getItem('user_posts');
    if (!postsUsersJson) {
      localStorage.setItem('user_posts', JSON.stringify([]))
    }
    axios.get(URL).then(({ data }) => loadPosts(data));
  }, []);

  const currentBlogs = posts?.slice(firstIndex, lastIndex);

  const onScrollTop = () => {
      if (scrollTo.current) {
        scrollTo.current.scrollIntoView();
      }
  }


  const toggleNext = (page: number) => {
    onScrollTop();
    setCurrentPage(page);
    setFirstIndex(currentPage * BLOGS_PER_PAGE);
    setLastIndex(firstIndex + BLOGS_PER_PAGE * 2);
  };

  const togglePrev = (page: number) => {
    onScrollTop();
    setCurrentPage(page);
    setFirstIndex(firstIndex - BLOGS_PER_PAGE);
    setLastIndex(firstIndex);
  };

  return (
    <section className={styles.blog}>
      <h1 className={styles.mainTitle} ref={scrollTo}>
        <span className={styles.colored}>Latest</span> Articles{" "}
      </h1>
      <div className={styles.container}>
        <ul className={styles.list}>
          {currentBlogs &&
            currentBlogs.map((item, index) => (
              <Article post={item} key={index} />
            ))}
        </ul>
        {!currentBlogs ? <Loader /> : null}
        {currentBlogs && (
          <Pagination
            currentPage={currentPage}
            toggleNext={toggleNext}
            togglePrev={togglePrev}
            lastIndex={lastIndex}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
