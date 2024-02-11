// @flow
import * as React from 'react';
import styles from './graph-date.module.scss';

type TGraphDate = {
    child: string;
    active: boolean;
};
const GraphDate: React.FC<TGraphDate> = ({child, active}) => {
    return (
        <span className={active ? styles.dateTextActive : styles.dateText}>{child}</span>
    );
};

export default GraphDate;