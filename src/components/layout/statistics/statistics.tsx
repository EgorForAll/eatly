// @flow
import * as React from 'react';
import styles from "./statisctics.module.scss";
import {IStats} from "@/interfaces/Istatistics";

interface IStatistics {
 statsList: IStats[]
}

const Statistics: React.FC<IStatistics> = ({statsList}) => {
    return (
        <section className={styles.statistics}>
            <h2 className='visually-hidden'>Our results</h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {statsList && statsList.map((item, index) => <li key={index} className={styles.item}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <span className={styles.desc}>{item.description}</span>
                    </li>)}
                </ul>
            </div>
        </section>
    );
};

export default Statistics;