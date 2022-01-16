import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./screens/Blog";
import { Routes, Route, Link } from "react-router-dom";
import About from "./screens/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
