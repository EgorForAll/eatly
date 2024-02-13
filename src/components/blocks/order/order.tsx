// @flow
import * as React from 'react';
import styles from "./order.module.scss";
import Image from 'react-image-webp';
import {IOrders} from "@/interfaces/orders";

type TOrder = {
    order: IOrders
}

const Order: React.FC<TOrder> = ({order}) => {
    return (
        <li className={styles.orderWindow}>
            <div className={styles.orderImageWrapper}>
                <Image src={order.image} webp={order.imageWebp} width={72} height={73} alt={'Изображение заказа'}
                       className={styles.smallImage}/>
            </div>
            <div className={styles.orderDescription}>
                <h2 className={styles.orderTitle}>{order.name}</h2>
                <span className={order.is_fail ? styles.failStatus : styles.orderStatus}>{order.status}</span>
            </div>
            <div className={styles.timeWrapper}>
                <span className={styles.orderTime}>{order.time}</span>
            </div>
        </li>
    );
};

export default Order;