import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        <NavLink to={"/"}>Blog</NavLink>
      </h2>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "new-btn" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/new"}
            className={({ isActive }) => (isActive ? "new-btn" : "")}
          >
            Novo Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin"}
            className={({ isActive }) => (isActive ? "new-btn" : "")}
          >
            Gerenciar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
