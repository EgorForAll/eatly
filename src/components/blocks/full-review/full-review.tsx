// @flow
import * as React from 'react';
import {IReview} from "@/interfaces/reviews";
import styles from "./full-review.module.scss";
import {ReactComponent as QuotesSvg} from "@/assets/images/quotes.svg";
import Image from 'react-image-webp';
import Star from "@/components/ui/star/star";
import ReviewText from "@/components/ui/review-text/review-text";
import Rating from "@/components/blocks/rating/rating";

type TFullReview = {
    review: IReview
};

const FullReview: React.FC<TFullReview> = ({review}) => {

    return (
        <div className={styles.review}>
            <header className={styles.header}>
                <Image webp={review.image_webp} className={styles.image} src={review.image} alt={review.name} width={70} height={70}/>
                <div className={styles.clientInfo}>
                    <h2 className={styles.name}>{review.name}</h2>
                    <span className={styles.time}>{review.time}</span>
                </div>
                <div className={styles.quotes}>
                    <QuotesSvg />
                </div>
            </header>
            <ReviewText text={review.text} />
            <Rating rate={review.rate}/>
        </div>
    );
};

export default FullReview;