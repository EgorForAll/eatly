// @flow
import * as React from 'react';
import {IComment} from "@/interfaces/comment";
import styles from "./comment.module.scss";

type TComment = {
    comment: IComment
};

const Comment: React.FC<TComment> = ({comment}) => {
    return (
    <li className={styles.comment}>
        <h3 className={styles.username}>@{comment.user.username}</h3>
        <p className={styles.text}>{comment.body}</p>
    </li>
    );
};

export default Comment;