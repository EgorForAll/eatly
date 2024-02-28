// @flow
import * as React from 'react';
import styles from "./loader.module.scss"

const Loader: React.FC = () => {
  return <span className={styles.loader} data-testid={'loader'}></span>;
};

export default Loader;