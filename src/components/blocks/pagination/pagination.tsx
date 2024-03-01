// @flow
import * as React from "react";
import styles from "./pagination.module.scss";
import ArrowRight from "@/components/ui/arrow-right/arrow-right";
import ArrowLeft from "@/components/ui/arrow-left/arrow-left";
import { IPost } from "@/interfaces/post";

type TPagination = {
  currentPage: number;
  toggleNext: (number: number) => void;
  togglePrev: (number: number) => void;
  posts: IPost[];
};

const Pagination: React.FC<TPagination> = ({
  currentPage,
  toggleNext,
  togglePrev,
  posts,
}) => {
  const incPage = () => toggleNext(currentPage + 1);
  const decPage = () => togglePrev(currentPage - 1);

  const isFirstDisabled = currentPage === 0;
  const isNextDisabled = posts[posts.length - 1].id === 150

  return (
    <div className={styles.pagination}>
      <ArrowLeft togglePage={decPage} disabled={isFirstDisabled} />
      <ArrowRight togglePage={incPage} disabled={isNextDisabled}/>
    </div>
  );
};

export default Pagination;
