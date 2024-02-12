// @flow
import * as React from 'react';
import styles from "./quality.module.scss";
import MobileScreen from "@/assets/images/mobile-screen.png";
import MobileScreenWebp from "@/assets/images/mobile-screen.webp";
import FastLink from "@/components/ui/fast-link/Fast-link";
import Image from 'react-image-webp';

const Quality: React.FC = () => {
    return (
        <section className={styles.quality}>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <Image src={MobileScreen} webp={MobileScreenWebp} alt={'Out app screen'} width={304} height={609} />
                </div>
                <div className={styles.description}>
                    <h2 className={styles.title}>Premium <span className={styles.colored}>Quality</span> <br/> For Your Health</h2>
                    <ul className={styles.advantagesList}>
                        <li className={styles.advantagesItem}>
                            Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
                        </li>
                        <li className={styles.advantagesItem}>
                            These foods promote overall wellness by support healthy digestion and boosting immunity
                        </li>
                    </ul>
                    <div className={styles.fastLinkWrapper}>
                        <FastLink text={'Download'} isColored={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;