// @flow
import * as React from 'react';
import styles from "./quality.module.scss";
import MobileScreen from "@/assets/images/mobile-screen.png";
import MobileScreenWebp from "@/assets/images/mobile-screen.webp";

const Quality: React.FC = () => {
    return (
        <section className={styles.quality}>
            <h2 className='visually-hidden'>Our quality</h2>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <picture>
                        <source type="image/webp" srcSet={MobileScreenWebp}/>
                        <img src={MobileScreen} alt="Our app screen" width={304} height={609}/>
                    </picture>
                </div>
                <div className={styles.description}></div>
            </div>
        </section>
    );
};

export default Quality;