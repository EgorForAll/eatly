// @flow
import * as React from 'react';
import styles from "./tag.module.scss"

type TTag = {
    tag: string,
    tags: string[]
};

const Tag: React.FC<TTag> = ({tag, tags}) => {
    const isLastIndex = () => tags[tags.length - 1] === tag;
         return <span className={styles.tag}>#{tag}{!isLastIndex() ? ',' : null}</span>
}

export default Tag;