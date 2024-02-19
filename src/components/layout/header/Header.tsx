import React from "react";
import styles from "./header.module.scss";
import Logo from "@/components/ui/logo/Logo";
import { Link } from "react-router-dom";
import AnchorLink from "@/components/ui/anchor/anchor";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo width={46} height={43} fontSize={21} />
        </Link>
        <nav className={styles.nav}>
          <AnchorLink
            title={"Recipes"}
            href={"#recipes"}
            className={styles.link}
          />
          <AnchorLink title={"FAQ"} href={"#faq"} className={styles.link} />
          <Link to="/blog" className={styles.link}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
