import { useState, useEffect } from "react";

import blogFetch from "../axios/config";

import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState();

  const [body, setBody] = useState();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      setTitle(data.title);

      setBody(data.body);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getPost();
  },[])

  const editPost = async (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
      userId: 1,
    };

    try {
      await blogFetch.put(`/posts/${id}`, {
        body: post,
      });
    } catch (err) {
      console.log(err);
    }

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={editPost}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Título</label>
          <textarea
            type="text"
            name="body"
            placeholder="Digite o conteúdo"
            id="body"
            value={body || ""}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
