import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullyBooked from "./pages/FullyBooked";
import RFantasy from "./pages/RFantasy";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="fullybooked" element={<FullyBooked />} />
        <Route path="rfantasy" element={<RFantasy />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
