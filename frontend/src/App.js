import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// import { lazy, Suspense } from "react";
// import { Suspense } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
    </Routes>
  );
}

export default App;
