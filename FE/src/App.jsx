import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Web/HomePage";
import Layout_web from "./Web/Layout_web/Layout_web";
import NotFound from "./Web/Layout_web/NotFound";
import axios from "axios";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/youtube.com" element={<Layout_web />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
