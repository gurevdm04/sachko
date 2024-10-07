import { useEffect, useState } from "react";
import axios from "./../../axios";
import style from "./CommentsList.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchComments } from "../../redux/slices/comments";

const CommentsList = ({ postId }: { postId: any }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.data);
  console.log(comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, []);

  return (
    <>
      {comments.length !== 0 && (
        <div className={style.wrap}>
          {comments.map((comment: any) => (
            <div className={style.commentWrap} key={comment._id}>
              <hr />
              <small className={style.author}>
                {comment.user.fullName} говорит:
              </small>
              <p className={style.text}>{comment.text}</p>
            </div>
          ))}
          <hr />
        </div>
      )}
    </>
  );
};

export default CommentsList;
