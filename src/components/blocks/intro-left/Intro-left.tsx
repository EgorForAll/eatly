// @flow
import * as React from 'react';
import styles from "@/components/blocks/intro-left/intro-left.module.scss";
import FastLink from "@/components/ui/fast-link/Fast-link";

const IntroLeft: React.FC = () => {
    return (
        <div className={styles.description}>
            <span className={styles.users}>OVER 1000 USERS</span>
            <h1 className={styles.title}>Enjoy Foods All Over The <span className={styles.colored}>World</span></h1>
            <p className={styles.text}>EatLy help you set saving goals, earn cash back offers, Go to disclaimer
                for more details and get paychecks up to two days early. Get a <span className={styles.colored}>$20 bonus.</span>
            </p>
            <div className={styles.fastLinks}>
                <FastLink text={'Get Started'} isColored={true}/>
                <FastLink text={'Go Pro'} isColored={false}/>
            </div>
        </div>
    );
};

export default IntroLeft;