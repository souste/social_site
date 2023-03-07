import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const url = "https://social-site-backend-souste.onrender.com/api/posts";
  const [data, setData] = useState({
    title: "",
    img: "",
    description: "",
    likes: "",
    author: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (window.confirm("Are you sure you want to create this post?")) {
      Axios.post(url, {
        title: data.title,
        img: data.img,
        description: data.description,
        // likes: parseInt(data.likes),
        author: data.author,
      }).then((res) => {
        console.log(res.data);
        setData({
          title: "",
          img: "",
          description: "",
          // likes: "",
          author: "",
        });
        navigate("/");
      });
    }
  }

  function handleChange(event) {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="create-post-box">
      <h1 className="create-post-title">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <li>
          <h3>Post Title</h3>
          <input
            onChange={handleChange}
            id="title"
            value={data.title}
            placeholder="Title"
            type="text"
            className="title-input"
          ></input>
        </li>
        <li>
          <h3>Paste Image URL</h3>
          <p>(Right click on any image and select "copy image address").</p>
          <input
            onChange={handleChange}
            id="img"
            value={data.img}
            placeholder="Img url"
            type="text"
            className="img-input"
          ></input>
        </li>
        <li>
          <h3>Post Description</h3>
          <textarea
            onChange={handleChange}
            id="description"
            value={data.description}
            placeholder="  Description"
            type="text"
            className="description-input"
          ></textarea>
        </li>
        <li>
          <h3>Your Name</h3>
          <input
            onChange={handleChange}
            id="author"
            value={data.author}
            placeholder="  Your name"
            type="text"
            className="author-input"
          ></input>
        </li>
        {/* <li>
          <h3>Like Counter...needs to be changed</h3>
          <input
            onChange={handleChange}
            id="likes"
            value={data.likes}
            placeholder="likes"
            type="number"
          ></input>
        </li> */}
        <li>
          <button className="create-post-submit-button">Submit</button>
        </li>
      </form>
    </div>
  );
}

export default CreatePost;
