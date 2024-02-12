// @flow
import * as React from 'react';
import styles from "./order.module.scss";
import Image from 'react-image-webp';

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
                <Image src={image} webp={imageWebp} width={73} height={81} alt={'Изображение заказа'} className={styles.smallImage}/>
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