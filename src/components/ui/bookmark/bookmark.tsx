// @flow
import * as React from 'react';
import styles from "./bookmark.module.scss";
import {ReactComponent as BookmarkSvg} from "@/assets/images/bookmark.svg";

const Bookmark: React.FC = () => {

    return (
        <button className={styles.bookmarkBtn}>
            <BookmarkSvg/>
        </button>
    );
};

export default Bookmark;