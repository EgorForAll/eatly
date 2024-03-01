import React from "react";
import styles from "@/components/layout/main-header/header.module.scss";
import Logo from "@/components/ui/logo/Logo";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Logo width={46} height={43} fontSize={21} />
                </Link>
                <nav className={styles.nav}>
                    <Link
                        to={"/"}
                        className={styles.link}
                    >Recipes</Link>
                    <Link  to={"/"} className={styles.link}>FAQ</Link>
                    <Link to="/blog" className={styles.link}>
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
