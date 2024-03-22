import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Web/HomePage";
import Layout_web from "./Web/Layout_web/Layout_web";


function App() {



  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/homePage" element={<Layout_web />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
