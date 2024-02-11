// @flow
import * as React from 'react';
import styles from "./zoom.module.scss";

type TZoom = {
    child: string;
    active: boolean;
};
const Zoom: React.FC<TZoom> = ({child, active}) => {
    return <span className={active ? styles.zoomActive : styles.zoom}>{child}</span>
};

export default Zoom;