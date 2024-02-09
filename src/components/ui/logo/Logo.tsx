import React from 'react';
import styles from "./logo.module.scss"
import {ReactComponent as LogoIcon} from '@/assets/images/Logo.svg'

const Logo: React.FC= () => {
    return (
        <div className={styles.icon}>
            <LogoIcon />
            <span className={styles.eatly}>eatly</span>
        </div>
    );
};

export default  Logo;