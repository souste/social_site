import "./Posts.css";
import { Link } from "react-router-dom";
import { getPosts } from "../api";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.data.posts);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p className="posts-loading">Page is loading...</p>
  ) : (
    <div>
      <ul className="posts-box">
        {posts.map((post) => {
          return (
            <Link to={`/posts/${post._id}`} key={post._id}>
              <li className="posts-set" key={post._id}>
                <h1 className="post-title">{post.title}</h1>;
                <img src={post.img} className="posts-img" alt={post.title} />;
                <p className="posts-description">{post.description}</p>
                <p>By user: Placeholdina67 on 21/02/22</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;
