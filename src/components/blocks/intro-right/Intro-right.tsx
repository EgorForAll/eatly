// @flow
import * as React from 'react';
import styles from "./intro-right.module.scss"
import Image from "@/assets/images/food-image.png";
import ImageWebp from "@/assets/images/food-image.webp";
import ImageSmallWebp from "@/assets/images/food-small.webp";
import ImageSmall from "@/assets/images/food-small.png";
import Order from "@/components/blocks/order/order";

const IntroRight: React.FC = () => {
    return (
        <div className={styles.visualization}>
            <div className={styles.imageWrapper}>
                <picture>
                    <source srcSet={ImageWebp}/>
                    <img className={styles.image} src={Image} alt="Изображение блюда" width={430} height={443}/>
                </picture>
            </div>
            <div className={styles.orderWrapper}>
                <Order name={'Chicken Hell'} time={'3:09 PM'} status={'On The Way'} image={ImageSmall} imageWebp={ImageSmallWebp}/>
            </div>
        </div>
    );
};

export default IntroRight;