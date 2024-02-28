// @flow
import * as React from "react";
import styles from "./comments.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "@/components/blocks/comment/comment";
import CommentForm from "@/components/blocks/comment-form/comment-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, resetComments } from "@/features/comments/comments";
import { RootState } from "src/assets/store";
import { getComments } from "@/shared/get-comments/get-comments";

type TComments = {
  id: string | undefined;
};

const Comments: React.FC<TComments> = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments.comments);
  const currentPost = useSelector(
    (state: RootState) => state.posts.currentPost
  );

  useEffect(() => {
    if (id) {
      getComments(id)
        .then(({ data }) => dispatch(fetchComments(data)))
        .catch((e) => console.error(e));
    }

    return () => {
      dispatch(resetComments());
    };
  }, [id]);

  return (
    <section className={styles.comments}>
      <div className={styles.container}>
        {comments && currentPost ? (
          <>
            <h2 className={styles.title}>Comments</h2>
            {comments.length > 0 ? (
              <ul className={styles.list}>
                {comments &&
                  comments.map((item, index) => (
                    <Comment comment={item} key={index} />
                  ))}
              </ul>
            ) : (
              <h3 className={styles.notFound}>Комментарии не найдены</h3>
            )}
          </>
        ) : null}
        {currentPost && <CommentForm id={id} comments={comments} />}
      </div>
    </section>
  );
};
export default Comments;
