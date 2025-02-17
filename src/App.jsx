import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar"

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
