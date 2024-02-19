// @flow
import * as React from 'react';
import styles from "./short-review.module.scss";
import ReviewText from "@/components/ui/review-text/review-text";
import Rating from "@/components/blocks/rating/rating";

type TShortReview = {
    text: string;
};

const ShortReview: React.FC<TShortReview> = ({text}) => {
    return (
        <div className={styles.shortReview}>
            <ReviewText text={text} />
        </div>
    );
};

export default ShortReview;