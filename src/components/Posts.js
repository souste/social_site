import "./Posts.css";
import { Link, useLocation } from "react-router-dom";
import { getPosts } from "../api";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.data.posts);
      setLoading(false);
    });
  }, [postDeleted]);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.post_id) {
      setPostDeleted(true);
    }
  }, [location.state]);

  const maxChars = 40;

  const truncateDescription = (description, post) => {
    if (description.length > maxChars) {
      return (
        <div>
          {description.substring(0, maxChars)}...
          <Link to={`/posts/${post._id}`}>See more</Link>
        </div>
      );
    } else {
      return <div>{description}</div>;
    }
  };

  return loading ? (
    <p className="posts-loading">Page is loading...</p>
  ) : (
    <ul className="posts-box">
      {posts
        .slice()
        .reverse()
        .map((post) => {
          return (
            <Link
              to={{
                pathname: `/posts/${post._id}`,
                state: { post_id: post._id, postDeleted: postDeleted },
              }}
              key={post._id}
            >
              <li className="posts-set" key={post._id}>
                <p className="posts-author">
                  By <span className="bold-text">{post.author}</span> posted
                  on&nbsp;
                  <span className="bold-text">{post.created}</span>
                </p>
                <h1 className="post-title">{post.title}</h1>

                <img src={post.img} className="posts-img" alt={post.title} />
                <p className="posts-description">
                  {truncateDescription(post.description, post)}{" "}
                </p>
              </li>
            </Link>
          );
        })}
    </ul>
  );
}

export default Posts;
