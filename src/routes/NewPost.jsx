import blogFetch from "../axios/config";

import {useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    if(title === "" || body === "") return;

    const post = {
      title,
      body,
      userId: 1,
    };
    
    try {
      await blogFetch.post("/posts", {
        body: post,
      });
    } catch (err) {
      console.log(err);
    }

    navigate("/");
  };


  return (
    <div className="new-post">
      <h2>Inserir um post:</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" value="Criar post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
