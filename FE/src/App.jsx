import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Web/HomePage";
import Layout_web from "./Web/Layout_web/Layout_web";
import NotFound from "./Web/Layout_web/NotFound";
import axios from "axios";
import url from "url";
import querystring from "querystring";

function App() {
  const [key_login, setKey_login] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlString = window.location.href;
        const parsedUrl = url.parse(urlString);
        const parsedQuery = (querystring.parse(parsedUrl.query));
        if (key_login && parsedQuery._id) {
          sessionStorage.setItem("user.profile", JSON.stringify(parsedQuery));
          window.location.href = window.location.origin + "/youtube.com";
        };
        setKey_login(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

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
