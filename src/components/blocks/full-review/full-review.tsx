// @flow
import * as React from 'react';
import {IReview} from "@/interfaces/reviews";
import styles from "./full-review.module.scss";
import {ReactComponent as QuotesSvg} from "../../../assets/images/quotes.svg";
import ReviewText from "../../ui/review-text/review-text";

type TFullReview = {
    review: IReview
};

const FullReview: React.FC<TFullReview> = ({review}) => {

    return (
        <div className={styles.review} data-testid={'review'}>
            <header className={styles.header}>
                <div className={styles.clientInfo}>
                    <h2 className={styles.name}>@{review.user.username}</h2>
                </div>
                <div className={styles.quotes}>
                    <QuotesSvg />
                </div>
            </header>
            <ReviewText text={review.body} />
        </div>
    );
};

export default FullReview;