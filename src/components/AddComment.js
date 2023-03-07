import { useState, useEffect } from "react";
import { getPostById } from "../api";
import Axios from "axios";
import "./AddComment.css";
import { deleteCommentById } from "../api";
import { useParams } from "react-router-dom";

function AddComment({ post_id }) {
  const url = "https://social-site-backend-souste.onrender.com/api/comments";
  const [comment, setComment] = useState({
    comment: "",
    like: "",
    author: "",
    post: "",
    // user: { name: "" },
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
      author: comment.author,
      like: comment.like,
      post: post_id,
      // user: "63f4c0b4575199880c8fcbda",
    }).then((res) => {
      setComments((prevComments) => [...prevComments, res.data]);
      setComment({
        comment: "",
        like: "",
        author: "",
        post: "",
        // user: "",
      });
    });
  }

  const handleDelete = (comment_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmed) {
      deleteCommentById(comment_id)
        .then(() => {
          setComments((prevComments) =>
            prevComments.filter((c) => c._id !== comment_id)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  function handleChange(event) {
    const newComment = { ...comment };
    newComment[event.target.id] = event.target.value;
    setComment(newComment);
    console.log(newComment);
  }

  return (
    <div className="commentsArea">
      <h2 className="comments-title">Comments</h2>

      <form onSubmit={handleSubmit}>
        <li>
          <input
            onChange={handleChange}
            id="comment"
            value={comment.comment}
            placeholder="   Add comment"
            type="text"
            className="description-input"
          ></input>
        </li>
        <li>
          <input
            onChange={handleChange}
            id="author"
            value={comment.author}
            placeholder="   Your Name"
            type="text"
            className="name-input"
          ></input>
        </li>
        {/* <li>
          <input
            onChange={handleChange}
            id="like"
            value={comment.like}
            placeholder="like"
            type="number"
          ></input>
        </li> */}
        <li>
          <button className="comment-submit-button">Submit</button>
        </li>
      </form>

      {comments
        .slice()
        .reverse()
        .map((comment) => (
          <div key={comment.id}>
            <ul className="comments-box">
              <p className="comments-author">
                By {comment.author} ({comment.created})
              </p>
              <h4>{comment.comment}</h4>

              {/* <p>Created By: {comment.user.name}</p> - this crashes! */}

              <button
                className="comment-delete-button"
                onClick={() => handleDelete(comment._id)}
              >
                Delete
              </button>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default AddComment;
