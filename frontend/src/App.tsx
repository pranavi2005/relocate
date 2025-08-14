import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
