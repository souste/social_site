import { useState, useEffect } from "react";
import { getPostById } from "../api";
import Axios from "axios";
import "./AddComment.css";

function AddComment({ post_id }) {
  const url = "https://social-site-backend-souste.onrender.com/api/comments";
  const [comment, setComment] = useState({
    comment: "",
    like: "",
    post: "",
    user: { name: "" },
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostById(post_id)
      .then((res) => {
        console.log(res.data.post.comments);
        setComments(res.data.post.comments);
      })
      .catch((err) => console.error(err));
  }, [post_id, comment]);

  function handleSubmit(event) {
    event.preventDefault();
    Axios.post(url, {
      comment: comment.comment,
      like: comment.like,
      post: post_id,
      user: "63f4c0b4575199880c8fcbda",
    }).then((res) => {
      setComments((prevComments) => [...prevComments, res.data]);
      setComment({
        comment: "",
        like: "",
        post: "",
        user: "",
      });
    });
  }

  function handleChange(event) {
    const newComment = { ...comment };
    newComment[event.target.id] = event.target.value;
    setComment(newComment);
    console.log(newComment);
  }

  return (
    <div>
      <h2 className="comments-title">Comments</h2>

      <form onSubmit={handleSubmit}>
        <li>
          <input
            onChange={handleChange}
            id="comment"
            value={comment.comment}
            placeholder="add comment"
            type="text"
            className="description-input"
          ></input>
        </li>
        <li>
          <input
            onChange={handleChange}
            id="like"
            value={comment.like}
            placeholder="like"
            type="number"
          ></input>
        </li>
        <li>
          <button>Submit</button>
        </li>
      </form>

      {comments.map((comment) => (
        <div key={comment.id}>
          <ul className="comments-box">
            <h4>{comment.comment}</h4>
            <p>{comment.like} likes</p>
            <p>Created On: {comment.createdAt}</p>
            {/* <p>Created By: {comment.user.name}</p> - this crashes! */}
            <p>Created by: Stephen Souness</p>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AddComment;
