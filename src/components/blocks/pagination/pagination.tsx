// @flow
import * as React from "react";
import styles from "./pagination.module.scss";
import ArrowRight from "@/components/ui/arrow-right/arrow-right";
import ArrowLeft from "@/components/ui/arrow-left/arrow-left";
import { useSelector } from "react-redux";
import { RootState } from "src/assets/store";

type TPagination = {
  currentPage: number;
  toggleNext: (number: number) => void;
  togglePrev: (number: number) => void;
  lastIndex: number;
};

const Pagination: React.FC<TPagination> = ({
  currentPage,
  toggleNext,
  togglePrev,
  lastIndex,
}) => {
  const total = useSelector((state: RootState) => state.posts.total);

  const incPage = () => toggleNext(currentPage + 1);
  const decPage = () => togglePrev(currentPage - 1);

  const isLastDisabled = lastIndex > total;
  const isFirstDisabled = currentPage === 1;

  return (
    <div className={styles.pagination}>
      <ArrowLeft togglePage={decPage} disabled={isFirstDisabled} />
      <ArrowRight togglePage={incPage} disabled={isLastDisabled} />
    </div>
  );
};

export default Pagination;
