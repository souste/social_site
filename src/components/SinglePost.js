import "./SinglePost.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api";
import AddComment from "./AddComment";

function SinglePost() {
  const { post_id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    getPostById(post_id).then((postData) => {
      setSinglePost(postData.data.post);
    });
  }, [post_id]);

  return (
    <div>
      <li className="single-post-set">
        <h1 className="single-post-title">{singlePost.title}</h1>
        <img
          src={singlePost.img}
          className="single-posts-img"
          alt={singlePost.title}
        />
        <p className="single-posts-description">{singlePost.description}</p>

        <p className="single-posts-likes">Likes: {singlePost.likes}</p>
        <p className="single-post-user">By user: Placeholdina67</p>
        <p className="single-posts-createdAt">{singlePost.createdAt}</p>
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
  );
}

export default SinglePost;
