// @flow
import * as React from 'react';
import styles from "./review-text.module.scss";

type TReviewText = {
    text: string
};

const ReviewText: React.FC<TReviewText> = ({text}) => {
    return (
        <p className={styles.text}>
            “{text}”
        </p>
    );
};

export default ReviewText;