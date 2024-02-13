// @flow
import * as React from 'react';
import {IPurchase} from "@/interfaces/purchases";
import styles from "./purchases.module.scss";
import ProgressBar from "@/components/ui/progrees-bar/progress-bar";

type TPurchases = {
    purchases: IPurchase[],
};

const Purchases: React.FC<TPurchases> = ({purchases}) => {

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h2 className={styles.purchaseTitle}>Purchases</h2>
                <select name="time" id="time" className={styles.timeSelect}>
                    <option value="month">This month</option>
                    <option value="week">This week</option>
                    <option value="year">This year</option>
                </select>
            </header>
            <ul className={styles.list}>
                {purchases && purchases.map((item, index) => <li key={index} className={styles.item}>
                    <div className={styles.info}>
                        <img src={item.icon} alt="Icon" width={50} height={50}/>
                        <div className={styles.desc}>
                            <h3 className={styles.itemTitle}>{item.type}</h3>
                            <span className={styles.changing}>{item.changing}</span>
                        </div>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>${Number(item.price).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className={styles.progress}>
                        <ProgressBar progress={item.progress} index={index}/>
                    </div>
                </li>)}
            </ul>
        </div>
    );
};

export default Purchases;