// @flow
import * as React from "react";
import styles from "./comments-form.module.scss";
import Loader from "../../ui/loader/loader;
import axios from "axios";
import { useRef, useState } from "react";
import { IComment } from "@/interfaces/comment";
import { useDispatch } from "react-redux";
import { addComment } from "@/features/comments/comments";

type TCommentForm = {
  id: string | undefined;
  comments: IComment[] | null;
};

const CommentForm: React.FC<TCommentForm> = ({ id, comments }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<true | false>(false);
  const [error, setError] = useState<string>("");
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const onAddComment = (e: React.FormEvent): void => {
    e.preventDefault();
    const comment = commentRef.current;
    if (comment && comment.value.length > 0) {
      setLoading(true);
      setError("");
      const data = {
        body: comment.value,
        postId: id,
        userId: 5,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post("https://dummyjson.com/comments/add", data, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (comments !== null) {
              dispatch(addComment([...comments, res.data]));
            } else {
              dispatch(addComment([res.data]))
            }
          }
        })
        .catch((e) => setError(e.message))
        .finally(() => {
          setLoading(false);
          comment.value = "";
        });
    } else {
      setError("Пожалуйста, введите комментарий");
    }
  };
  return (
    <form
      method={"post"}
      className={styles.form}
      onSubmit={(e) => onAddComment(e)}
    >
      <label htmlFor="comment" className={styles.label}>
        Add <span className={styles.colored}>comment</span>
      </label>
      <textarea
        ref={commentRef}
        name="comment"
        id="comment"
        placeholder={"enter your comment"}
        className={styles.field}
      ></textarea>
      <div className={styles.error}>{error ? error : null}</div>
      <div className={styles.commentFooter}>
        <button type={"submit"} className={styles.submit} disabled={isLoading}>
          Send
        </button>
        {isLoading ? <Loader /> : null}
      </div>
    </form>
  );
};

export default CommentForm;
