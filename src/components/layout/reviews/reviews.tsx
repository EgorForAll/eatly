// @flow
import * as React from 'react';
import styles from "./reviews.module.scss";
import FullReview from "@/components/blocks/full-review/full-review";
import {IReview} from "@/interfaces/reviews";
import ShortReview from "@/components/blocks/short-review/short-review";
import ProgressBar from "@/components/ui/progrees-bar/progress-bar";

type TReviews = {
    reviews: IReview[]
};

const Reviews: React.FC<TReviews> = ({reviews}) => {

    const lastReviews = reviews.slice(1)

    return (
        <section className={styles.reviews}>
            <h2 className={styles.title}><span>Customer</span> Say</h2>
            <div className={styles.container}>
                <div className={styles.fullReview}>
                    <FullReview review={reviews[0]} />
                </div>
                <div className={styles.shortReviews}>
                    {lastReviews && lastReviews.map((item, index) => <ShortReview text={item.text} rate={item.rate}  key={index}/>)}
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar progress={29} index={0} />
                </div>
            </div>
        </section>
    );
};

export default Reviews;