import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import Loader from "../components/Loader";

import blogFetch from "../axios/config";

import "./Post.css"

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const getPost = async () => {
    
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <Loader />
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
