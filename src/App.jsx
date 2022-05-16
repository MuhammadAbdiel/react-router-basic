import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link className="navbar" to="/">
          Home
        </Link>
        <Link className="navbar" to="/about">
          About
        </Link>
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
