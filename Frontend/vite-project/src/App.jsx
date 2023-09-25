import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/home/home";
import Login from "./components/login/Login";
import Forgot from "./components/forgot/forgot";
import Signup from "./utils/modal";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
