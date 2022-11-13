import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Logout from "./Components/Login/Logout";
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
export default App;
