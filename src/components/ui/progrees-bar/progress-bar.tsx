// @flow
import * as React from 'react';
import styles from "./progress-bar.module.scss";
import Slider from '@mui/material/Slider';

type TProgressBar = {
    progress: number;
    index: number
};

const ProgressBar: React.FC<TProgressBar> = ({progress, index}) => {

    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const colors = ['108, 95, 188', '251, 173, 24'];
    const currentColor = colors[index];


    const BACK_LINE = {
        backgroundColor:`rgba(${currentColor}, 0.2)`
    }


    return (
        <div style={BACK_LINE} className={styles.progressWrapper}>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
        </div>
    );
};

export default ProgressBar;