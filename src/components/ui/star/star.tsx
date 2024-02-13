// @flow
import * as React from 'react';
import styles from "./star.module.scss";
import {ReactComponent as StarSvg} from "@/assets/images/rate-star.svg";

const Star: React.FC= () => {
    return (
        <span className={styles.rateWrapper}>
            <StarSvg/>
        </span>
    );
};

export default Star;