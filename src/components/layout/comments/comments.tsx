// @flow
import * as React from "react";
import styles from "./comments.module.scss";
import { useEffect, useRef, useState } from "react";
import { IComment } from "@/interfaces/comment";
import axios from "axios";
import Comment from "@/components/blocks/comment/comment";
import Loader from "@/components/ui/loader/loader";

type TComments = {
  id: string | undefined;
};

const Comments: React.FC<TComments> = ({ id }) => {
  const [comments, setComments] = useState<IComment[] | []>([]);
  const [isLoading, setLoading] = useState<true | false>(false);
  const [error, setError] = useState<string>("");
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/comments/post/${id}`)
        .then(({ data }) => setComments(data.comments))
        .catch((e) => console.log(e));
    }
  }, []);

  const onAddComment = (e: React.FormEvent): void => {
    e.preventDefault();
    const comment = commentRef.current;
    if (comment && comment.value.length > 0) {
      setLoading(true);
      setError('')
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
            setComments([...comments, res.data]);
          }
        })
        .catch((e) => setError(e.message))
        .finally(() => {
          setLoading(false);
          comment.value = "";
        });
    } else {
      setError('Пожалуйста, введите комментарий')
    }
  };

  return (
    <section className={styles.comments}>
      <div className={styles.container}>
        {comments ? (
          <>
            <h2 className={styles.title}>Comments</h2>
            <ul className={styles.list}>
              {comments &&
                comments.map((item, index) => (
                  <Comment comment={item} key={index} />
                ))}
            </ul>
          </>
        ) : null}
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
            {isLoading ? <Loader/> : null}
          </div>
        </form>
      </div>
    </section>
  );
};
export default Comments;
