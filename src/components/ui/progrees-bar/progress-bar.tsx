// @flow
import * as React from 'react';
import styles from "./progress-bar.module.scss";

type TProgressBar = {
    progress: number;
    index: number
};

const ProgressBar: React.FC<TProgressBar> = ({progress, index}) => {

    const colors = ['108, 95, 188', '251, 173, 24'];
    const currentColor = colors[index];

    const PROGRESS_LINE = {
        width: progress + '%',
        backgroundColor: `rgb(${currentColor})`,
    }

    const BACK_LINE = {
        backgroundColor:`rgba(${currentColor}, 0.2)`
    }


    return (
        <div style={BACK_LINE} className={styles.progressWrapper}>
            <span style={PROGRESS_LINE} className={styles.progressBar}></span>
        </div>
    );
};

export default ProgressBar;