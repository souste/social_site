import axios from "axios";

const info = axios.create({
  baseURL: "https://social-site-backend-souste.onrender.com/api",
});

export const getPosts = () => {
  return info.get("/posts").then((res) => {
    return res.data;
  });
};

export const getPostById = (post_id) => {
  return info.get(`/posts/${post_id}`).then((res) => {
    return res.data;
  });
};
