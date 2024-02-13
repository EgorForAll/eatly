import React from 'react';
import styles from "./logo.module.scss"


type TLogo  = {
    width: number;
    height: number;
    fontSize: number;
}

const Logo: React.FC<TLogo>= ({width, height, fontSize}) => {

    return (
        <div className={styles.icon}>
            <svg width={width} height={height} viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.67383" y="4.97852" width="42.2674" height="37.3367" rx="6.96951" fill="#6C5FBC"/>
                <rect x="1.0075" y="1.0075" width="40.2524" height="35.3217" rx="5.96201" fill="#DBD9EE"
                      stroke="#6C5FBC" strokeWidth="2.01499"/>
                <path d="M32.624 12.0518L9.72243 11.9505" stroke="#6C5FBC" strokeWidth="2.08432" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M32.6096 16.6368L27.5162 16.6142C25.4095 16.6049 23.7056 14.5428 23.7133 12.0119C23.7211 9.48095 25.4376 7.43398 27.5443 7.4433L32.6377 7.46582"
                    stroke="#6C5FBC" strokeWidth="2.08432" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M17.3611 26.7221L10.7067 26.648C10.1614 26.6456 9.70458 26.1076 9.6942 25.4525L9.64992 23.7254C9.63962 23.0405 10.0999 22.462 10.6699 22.4645L17.25 22.5383L17.3611 26.7221Z"
                    stroke="#6C5FBC" strokeWidth="2.08432" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M27.8134 29.2108L18.4076 29.0948C17.8624 29.0924 17.4055 28.5544 17.3951 27.8993L17.2752 22.5242L32.555 22.7108L32.5653 23.3957C32.6421 26.6417 30.5025 29.2525 27.8134 29.2108Z"
                    stroke="#6C5FBC" strokeWidth="2.08432" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{fontSize: `${fontSize}px`}} className={styles.eatly}>eatly</span>
        </div>
    );
};

export default Logo;