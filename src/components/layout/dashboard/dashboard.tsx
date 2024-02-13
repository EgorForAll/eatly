// @flow
import * as React from 'react';
// @ts-ignore
import styles from "./dashboard.module.scss";
import {IOrders} from "@/interfaces/orders";
import Order from "@/components/blocks/order/order";
import {IPurchase} from "@/interfaces/purchases";
import Purchases from "@/components/blocks/purchases/purchases";

type TDashboard = {
    orders: IOrders[],
    purchases: IPurchase[]
};

const Dashboard: React.FC<TDashboard> = ({orders, purchases}) => {
    return (
        <section className={styles.dashboard}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Control <span className={styles.colored}>Purchase</span> <br/> Via Dashboard</h2>
                    <ul className={styles.orders}>
                        {orders && orders.map((item, index) => <Order order={item} key={index}/>)}
                    </ul>
                </div>
                <div className={styles.right}>
                    <Purchases purchases={purchases} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;