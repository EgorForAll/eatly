import React from 'react';
import styles from "./header.module.scss";
import Logo from "@/components/ui/logo/Logo";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo width={46} height={43} fontSize={21}/>
                <nav className={styles.nav}>
                    <Link to='/' className={styles.link}>Recipes</Link>
                    <Link to='/faq' className={styles.link}>FAQ</Link>
                    <Link to='/blog' className={styles.link}>Blog</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;