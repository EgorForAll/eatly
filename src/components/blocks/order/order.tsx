// @flow
import * as React from 'react';
import styles from "./order.module.scss";

type TOrder = {
    name: string;
    time: string;
    status: string;
    image: string;
    imageWebp: string;
}
const Order: React.FC<TOrder> = ({name, status, time, image, imageWebp}) => {
    return (
        <div className={styles.orderWindow}>
            <div className={styles.orderImageWrapper}>
                <picture>
                    <source srcSet={imageWebp}/>
                    <img className={styles.smallImage} src={image} alt="Изображение заказа" width={73}
                         height={81}/>
                </picture>
            </div>
            <div className={styles.orderDescription}>
                <h2 className={styles.orderTitle}>{name}</h2>
                <span className={styles.orderStatus}>{status}</span>
            </div>
            <div className={styles.timeWrapper}>
                <span className={styles.orderTime}>{time}</span>
            </div>
        </div>
    );
};

export default Order;