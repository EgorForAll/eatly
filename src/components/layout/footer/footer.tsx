// @flow
import * as React from "react";
import Logo from "@/components/ui/logo/Logo";
import AnchorLink from "@/components/ui/anchor/anchor";
import { ReactComponent as InstaIcon } from "@/assets/images/insta.svg";
import { ReactComponent as InIcon } from "@/assets/images/in.svg";
import { ReactComponent as FacebookIcon } from "@/assets/images/facebook.svg";
import { ReactComponent as TwitterIcon } from "@/assets/images/twitter.svg";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.up}>
          <div className={styles.logoWrapper}>
            <Link to={'/'}>
              <Logo width={62} height={57} fontSize={33} />
            </Link>

          </div>

          <nav className={styles.nav}>
            <AnchorLink
              title={"Recipes"}
              href={"#recipes"}
              className={styles.link}
            />
            <AnchorLink title={"FAQ"} href={"#faq"} className={styles.link} />
            <Link to={"/blog"} className={styles.link}>
              Blog
            </Link>
          </nav>
        </div>
        <div className={styles.down}>
          <span className={styles.rights}>
            © 2023 EATLY All Rights Reserved.
          </span>
          <ul className={styles.socialMedia}>
            <li className={styles.item}>
              <Link to={"/inst"} className={styles.mediaIcon}>
                <InstaIcon />
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={"/in"} className={styles.mediaIcon}>
                <InIcon />
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={"/facebook"} className={styles.mediaIcon}>
                <FacebookIcon />
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={"/twitter"} className={styles.mediaIcon}>
                <TwitterIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
