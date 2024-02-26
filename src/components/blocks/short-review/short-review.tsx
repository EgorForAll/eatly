// @flow
import * as React from 'react';
import styles from "./short-review.module.scss";
import ReviewText from "@/components/ui/review-text/review-text";

type TShortReview = {
    text: string;
};

const ShortReview: React.FC<TShortReview> = ({text}) => {
    return (
        <li className={styles.shortReview}>
            <ReviewText text={text} />
        </li>
    );
};

export default ShortReview;