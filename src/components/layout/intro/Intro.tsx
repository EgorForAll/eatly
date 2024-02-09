// @flow 
import * as React from 'react';
import styles from './intro.module.scss';
import IntroLeft from "@/components/blocks/intro-left/Intro-left";
import IntroRight from "@/components/blocks/intro-right/Intro-right";

const Intro: React.FC = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <IntroLeft />
                <IntroRight />
            </div>
        </section>
    );
};

export default Intro;