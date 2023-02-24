import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./CreatePost.css";

function CreatePost() {
  const url = "https://social-site-backend-souste.onrender.com/api/posts";
  const [data, setData] = useState({
    title: "",
    img: "",
    description: "",
    likes: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    Axios.post(url, {
      title: data.title,
      img: data.img,
      description: data.description,
      likes: parseInt(data.likes),
    }).then((res) => {
      console.log(res.data);
      setData({
        title: "",
        img: "",
        description: "",
        likes: "",
      });
    });
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
            placeholder="title"
            type="text"
            className="title-input"
          ></input>
        </li>
        <li>
          <h3>Paste Image URL</h3>
          <p>(right click on any image and select "copy image address").</p>
          <input
            onChange={handleChange}
            id="img"
            value={data.img}
            placeholder="img url"
            type="text"
            className="img-input"
          ></input>
        </li>
        <li>
          <h3>Post Description</h3>
          <input
            onChange={handleChange}
            id="description"
            value={data.description}
            placeholder="description"
            type="text"
            className="description-input"
          ></input>
        </li>
        <li>
          <h3>Like Counter...needs to be changed</h3>
          <input
            onChange={handleChange}
            id="likes"
            value={data.likes}
            placeholder="likes"
            type="number"
          ></input>
        </li>
        <li>
          <button>Submit</button>
        </li>
      </form>
    </div>
  );
}

export default CreatePost;
