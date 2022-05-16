import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#61dafb" } : { color: "#fff" }
          }
          className="navbar"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#61dafb" } : { color: "#fff" }
          }
          className="navbar"
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
