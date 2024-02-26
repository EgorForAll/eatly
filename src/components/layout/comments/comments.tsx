// @flow
import * as React from "react";
import styles from "../../blocks/comment-form/comments.module.scss";
import { useEffect } from "react";
import axios from "axios";
import Comment from "@/components/blocks/comment/comment";
import CommentForm from "@/components/blocks/comment-form/comment-form";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments, resetComments} from "@/features/comments/comments";
import {RootState} from "src/assets/store";

type TComments = {
  id: string | undefined;
};

const Comments: React.FC<TComments> = ({ id }) => {
  // const [comments, setComments] = useState<IComment[] | []>([]);
  const dispatch = useDispatch()
  const comments = useSelector((state: RootState) => state.comments.comments)

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/comments/post/${id}`)
        .then(({ data }) => dispatch(fetchComments(data)))
        .catch((e) => console.log(e));
    }

    return () => {
      dispatch(resetComments())
    }
  }, [id]);


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
        <CommentForm id={id}  comments={comments} />
      </div>
    </section>
  );
};
export default Comments;
