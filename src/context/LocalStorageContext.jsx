import { createContext } from "react";

export const ContextLocalStorage = createContext();

export const ContextLocalStorageProvider = ({ children }) => {
  const getLocalS = () => {
    const posts = JSON.parse(localStorage.getItem("post") || "[]");

    return posts;
  };

  const saveLS = (content) => {
    const posts = getLocalS();

    posts.push(content);

    localStorage.setItem("post", JSON.stringify(posts));
  };

  return (
    <ContextLocalStorage.Provider value={{ saveLS, getLocalS }}>
      {children}
    </ContextLocalStorage.Provider>
  );
};
