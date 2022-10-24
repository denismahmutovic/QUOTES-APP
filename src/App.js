import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
