// @flow
import * as React from "react";
import styles from "./comments.module.scss";
import {useEffect, useState} from "react";
import {IComment} from "@/interfaces/comment";
import axios from "axios";

type TComments = {
    id: string | undefined;
};

const Comments: React.FC<TComments> = ({id}) => {
    const [comments, setComments] = useState<IComment[] | []>([]);

    useEffect(() => {
        if (id) {
            axios
                .get(`https://dummyjson.com/comments/post/${id}`)
                .then(({data}) => setComments(data.comments))
                .catch((e) => console.log(e));
        }
    }, []);

    return (
      <section className={styles.comments}>
        <div className={styles.container}>
          {comments ? (
            <>
              <h2 className={styles.title}>Comments</h2>
              <ul className={styles.list}>
              </ul>
            </>
          ) : null}
        </div>
      </section>
    );
};

export default Comments;
