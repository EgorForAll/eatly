// @flow
import * as React from 'react';
import styles from "./fast-link.module.scss";

type TFastLink = {
    text: string;
    isColored: boolean;
};

type TStyle = {
    color: string;
    backgroundColor: string;
}

const FastLink: React.FC<TFastLink> = ({text, isColored}) => {
    const coloredLink: TStyle = {
        color: '#fff',
        backgroundColor: '#6C5FBC'
    }

    const unColoredLink: TStyle = {
        color: '#6C5FBC',
        backgroundColor: '#fff'
    }

    return (
        <>
            <a href="#" style={isColored ? coloredLink : unColoredLink} className={styles.fastLink}>{text}</a>
        </>
    );
};

export default FastLink;