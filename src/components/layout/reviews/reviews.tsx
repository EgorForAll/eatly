// @flow
import * as React from "react";
import styles from "./reviews.module.scss";
import FullReview from "@/components/blocks/full-review/full-review";
import { IReview } from "@/interfaces/reviews";
import ShortReview from "@/components/blocks/short-review/short-review";
import { CSSProperties, useEffect, useState } from "react";
import { detectFirefox } from "@/utils/utils";
import { getAllComments } from "@/shared/get-all-comments/get-all-comments";
import Loader from "@/components/ui/loader/loader";

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getAllComments()
      .then(({ data }) => setReviews(data.comments))
      .catch((e) => {
        console.error(e);
        setError("Не удается загрузить отзывы");
      })
      .finally(() => setLoading(false));
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
        {isLoading && <Loader />}
        {reviews.length > 0 && (
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
        )}
        {error && !reviews.length && (
          <h3 className={styles.notFound}>{error}</h3>
        )}
      </div>
    </section>
  );
};

export default Reviews;
