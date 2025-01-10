import { useState, useEffect } from "react";

import blogFetch from "../axios/config";

import { Link } from "react-router-dom";

import "./Home.css";

import Loader from "../components/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;

      setPosts(data);
    } catch (err) {
      console.log(err);
    }

    
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? <Loader/> : (
       posts.map(post =>(
        <div className="post" key={post.id}>
           <h2>{post.title}</h2>
           <p>{post.body}</p>
           <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
        </div>
       ))
      )}
    </div>
  );
};

export default Home;
