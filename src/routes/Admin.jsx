import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import "./Admin.css"

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const response = await blogFetch.get("/posts");

      console.log(response);

      const data = response.data;

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const deletePost = async (id) => {
    try {
      await blogFetch.delete(`/posts/${id}`);
    } catch (err) {
      console.log(err);
    }

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  };

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>
                Editar
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="btn delete-btn"
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
