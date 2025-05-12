import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Video from "./pages/video/Video";

const App = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <div>
      <NavBar setSidebar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
