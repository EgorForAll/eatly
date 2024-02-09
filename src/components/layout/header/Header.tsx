import React from 'react';
import styles from "./header.module.scss";
import Logo from "@/components/ui/logo/Logo";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <nav className={styles.nav}>
                    <a href="#" className={styles.link}>Recipes</a>
                    <a href="#" className={styles.link}>Blog</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;