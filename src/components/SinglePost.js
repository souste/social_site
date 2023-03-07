import "./SinglePost.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPostById, deletePostById, patchLike } from "../api";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      patchLike(post_id).then((upLike) => {
        if (singlePost._id === post_id) {
          return { ...upLike, likes: singlePost.likes + 1 };
        }
        return upLike;
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
            <p className="single-post-top-filler">hhhhhhhhhhhhhhhhhh</p>
            <p className="posts-author">
              By <span className="bold-text">{singlePost.author}</span> posted
              on&nbsp;
              <span className="bold-text">{singlePost.created}</span>
            </p>
            <h1 className="single-post-title">{singlePost.title}</h1>

            <img
              src={singlePost.img}
              className="single-posts-img"
              alt={singlePost.title}
            />
            <p className="single-posts-description">{singlePost.description}</p>

            <p className="single-posts-likes">
              <button
                className="like-button"
                onClick={() => {
                  handleLikes(singlePost.post_id);
                }}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              {singlePost.likes + likes}
            </p>

            <Link to={`/`}>
              <button className="single-post-back-button">&times;</button>
            </Link>

            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </li>
          <div>
            <AddComment post_id={post_id} />
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePost;
