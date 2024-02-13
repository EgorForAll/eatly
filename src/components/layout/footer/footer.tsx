// @flow
import * as React from 'react';
import Logo from "@/components/ui/logo/Logo";
import {ReactComponent as InstaIcon} from "@/assets/images/insta.svg";
import {ReactComponent as InIcon} from "@/assets/images/in.svg";
import {ReactComponent as FacebookIcon} from "@/assets/images/facebook.svg";
import {ReactComponent as TwitterIcon} from "@/assets/images/twitter.svg";
import styles from "./footer.module.scss";

const Footer: React.FC= () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.up}>
                    <div className={styles.logoWrapper}>
                        <Logo width={62}  height={57} fontSize={33}/>
                    </div>

                    <nav className={styles.nav}>
                        <a href="#" className={styles.link}>
                            About Us
                        </a>
                        <a href="#" className={styles.link}>
                        Contact
                    </a>
                    </nav>
                </div>
                <div className={styles.down}>
                    <span className={styles.rights}>© 2023 EATLY All Rights Reserved.</span>
                    <ul className={styles.socialMedia}>
                        <li className={styles.item}>
                            <a href="#" className={styles.mediaIcon}>
                                <InstaIcon/>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.mediaIcon}>
                                <InIcon />
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.mediaIcon}>
                                <FacebookIcon/>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.mediaIcon}>
                                <TwitterIcon/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;