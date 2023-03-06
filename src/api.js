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

export const deletePostById = (post_id) => {
  return info.delete(`/posts/${post_id}`).then((res) => {
    return res.data;
  });
};

export const deleteCommentById = (comment_id) => {
  return info.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};

export const patchLike = (post_id) => {
  const patchObject = { likes: 1 };
  return info.patch(`/posts/${post_id}`, patchObject).then((res) => {
    return res.data;
  });
};
