import "./SinglePost.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPostById, deletePostById, patchLike } from "../api";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
// import CloseButton from "react-bootstrap/CloseButton";

function SinglePost() {
  const { post_id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  const [postDeleted, setPostDeleted] = useState(false);
  const [likes, setLikes] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(post_id).then((postData) => {
      setSinglePost(postData.data.post);
    });
  }, [post_id, postDeleted]);

  const handleLikes = (post_id) => {
    if (likes === 0) {
      setLikes(1);
      patchLike(post_id).then((post) => {
        if (singlePost._id === post_id) {
          setSinglePost((post) => {
            return { ...post, likes: post.likes + 1 };
          });
        }
      });
    }
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the post?"
    );
    if (confirmed) {
      deletePostById(post_id).then(() => {
        setPostDeleted(true);
        navigate.push("/", { post_id: post_id });
      });
    }
  };

  return (
    <>
      {postDeleted ? (
        <div className="deleted-box">
          <p>Post Successfully Deleted </p>
          <Link to={`/`}>
            <button className="post-delete-button">Home</button>
          </Link>
        </div>
      ) : (
        <div>
          <li className="single-post-set">
            {/* <Link to={`/`}> */}

            {/* </Link> */}
            <p className="single-post-top-filler">hhhhhhhhhhhhhhhhhh</p>
            <h1 className="single-post-title">{singlePost.title}</h1>

            <img
              src={singlePost.img}
              className="single-posts-img"
              alt={singlePost.title}
            />
            <p className="single-posts-description">{singlePost.description}</p>

            <p className="single-posts-likes">
              Likes: {singlePost.likes}{" "}
              <button
                onClick={() => {
                  handleLikes(post_id);
                }}
              >
                Like
              </button>
            </p>

            <Link to={`/`}>
              <button className="single-post-back-button">&times;</button>
            </Link>
            <p className="single-post-user">
              Stephen Souness, {singlePost.createdAt}
            </p>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </li>
          <div>
            {/* <h2 className="comments-title">Comments</h2> */}
            <AddComment post_id={post_id} />
            {/* {singlePost.comments &&
          singlePost.comments.map((comment) => {
            return (
              <ul className="comments-box" key="comment._id">
                <p>{comment.comment}</p>
                <p>Created On: {comment.createdAt}</p>
                <p>Created By: {comment.user.name} </p>
              </ul>
            );
          })} */}
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePost;
