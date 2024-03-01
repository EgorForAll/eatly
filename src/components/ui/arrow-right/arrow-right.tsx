// @flow
import * as React from 'react';
import styles from "./arrow-right.module.scss";

type TPaginationArrow = {
    togglePage: () => void;
    disabled: boolean
};


const ArrowRight: React.FC<TPaginationArrow> = ({togglePage, disabled}) => {


    return (
        <button data-testid={'prev-button'} className={styles.button} onClick={() => togglePage()} disabled={disabled}>
            <svg  width="46" height="30" viewBox="0 0 46 30" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M0.000427173 15.0002C0.000427213 14.0797 0.746617 13.3335 1.66709 13.3335L41.6685 13.3335C42.589 13.3335 43.3352 14.0797 43.3352 15.0002C43.3352 15.9206 42.589 16.6668 41.6685 16.6668L1.66709 16.6668C0.746617 16.6668 0.000427133 15.9206 0.000427173 15.0002Z"
                      fill='#605E5E'/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M31.7117 0.386359C32.4188 -0.202926 33.4698 -0.107406 34.059 0.599709L44.5778 13.2217C45.4362 14.2518 45.4362 15.7482 44.5778 16.7783L34.059 29.4003C33.4698 30.1074 32.4188 30.2029 31.7117 29.6136C31.0046 29.0244 30.9091 27.9734 31.4984 27.2663L41.7207 15L31.4984 2.7337C30.9091 2.02658 31.0046 0.975644 31.7117 0.386359Z"
                      fill='#605E5E'/>
            </svg>
        </button>
    );
};

export default ArrowRight;