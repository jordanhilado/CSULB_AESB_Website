import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./screens/Blog";
import { Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Clubs from "./screens/ClubsAndOrganizations";
import Meetings from "./screens/Meetings";
import Officers from "./screens/Officers";
import Merchandise from "./screens/Merchandise";
import Gallery from "./screens/Gallery";
import Join from "./screens/Join";
import Contact from "./screens/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="clubs" element={<Clubs />} />
      <Route path="meetings-and-events" element={<Meetings />} />
      <Route path="officers" element={<Officers />} />
      <Route path="merchandise" element={<Merchandise />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="join" element={<Join />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
