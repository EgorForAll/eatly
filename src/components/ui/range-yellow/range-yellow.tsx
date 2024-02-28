// @flow
import * as React from "react";
import styles from "./range-yellow.module.scss";
import { useState } from "react";

type TProgressBar = {
  progress: number;
};

const RangeYellow: React.FC<TProgressBar> = ({ progress }) => {
  const [value, setValue] = useState<number>(progress);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(Number(e?.target?.value));

  return (
    <div className={styles.progressWrapper}>
      <input
        onChange={(e) => handlerChange(e)}
        type="range"
        className={styles.progressBar}
        defaultValue={value}
        min={0}
        max={100}
      />
    </div>
  );
};

export default RangeYellow;
