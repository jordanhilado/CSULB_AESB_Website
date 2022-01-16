import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./screens/Blog";
import { Routes, Route, Link } from "react-router-dom";
import About from "./screens/About";
import Clubs from "./screens/ClubsAndOrganizations";
import Meetings from "./screens/Meetings";
import Events from "./screens/Events";
import Officers from "./screens/Officers";
import Merchandise from "./screens/Merchandise";
import Calendar from "./screens/Calendar";
import Gallery from "./screens/Gallery";
import Join from "./screens/Join";
import Forms from "./screens/Forms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="clubs" element={<Clubs />} />
      <Route path="meetings" element={<Meetings />} />
      <Route path="events" element={<Events />} />
      <Route path="officers" element={<Officers />} />
      <Route path="merchandise" element={<Merchandise />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="join" element={<Join />} />
      <Route path="forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
