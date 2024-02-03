import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Bongo24 from "./pages/Bongo24";
import FullyBooked24 from "./pages/FullyBooked24";
import RFantasy from "./pages/RFantasy";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="fullybooked24" element={<FullyBooked24 />} />
        <Route path="bongo24" element={<Bongo24 />} />
        <Route path="rfantasy" element={<RFantasy />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  </HashRouter>
  )
}

export default App;
