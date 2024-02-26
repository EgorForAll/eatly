// @flow
import * as React from "react";
import styles from "./reviews.module.scss"
import FullReview from "@/components/blocks/full-review/full-review";
import { IReview } from "@/interfaces/reviews";
import ShortReview from "@/components/blocks/short-review/short-review";
import { CSSProperties, useEffect, useState } from "react";
import axios from "axios";
import { detectFirefox } from "@/utils/utils";

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[] | []>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/comments")
      .then(({ data }) => setReviews(data.comments))
      .catch((e) => console.error(e));
  }, []);

  const isFirefox = detectFirefox();
  const scrollStyle: CSSProperties = {
    scrollbarWidth: "thin",
    scrollMargin: "0 100px 0 0",
    scrollbarColor: "#675BB1 #cecbde",
  };

  const lastReviews = reviews.slice(1, 6);
  const firstReview = reviews[0];

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>
        <span>Customer</span> Say
      </h2>
      <div className={styles.container}>
        {reviews.length > 0 ? (
          <>
            <div className={styles.fullReview}>
              {firstReview && <FullReview review={firstReview} />}
            </div>
            <ul
              className={styles.shortReviewsList}
              style={isFirefox ? scrollStyle : undefined}
            >
              {lastReviews &&
                lastReviews.map((item, index) => (
                  <ShortReview text={item.body} key={index} />
                ))}
            </ul>
          </>
        ) : <h3 className={styles.notFound}>Отзывы не найдены</h3>}
      </div>
    </section>
  );
};

export default Reviews;
