import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Web/HomePage";
import Layout_web from "./Web/Layout_web/Layout_web";
import NotFound from "./Web/Layout_web/NotFound";
import url from "url";
import querystring from "querystring";
import { set_SessionStorage } from "./Services/Api";
import { LanguageProvider } from "./LanguageProvider";
import Orther_Page from "./Profile/Orther_Page";
import Layout_Admin from "./Admin/Layout_Admin";
import Layout_User from "./Profile/Layout_User";
import User_Dashboard from "./Profile/User_Dashboard";
import Admin_Dashboard from "./Admin/Admin_Dashboard";

function App() {
  const [key_login, setKey_login] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlString = window.location.href;
        const parsedUrl = url.parse(urlString);
        let parsedQuery = (querystring.parse(parsedUrl.query));
        if (parsedQuery.scopes) {
          parsedQuery.scopes = parsedQuery.scopes.split(",");
        };

        if (key_login && parsedQuery._id) {
          set_SessionStorage("user.profile", parsedQuery);
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
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/youtube.com" element={<Layout_web />}>
          <Route index element={<HomePage />} />

        </Route>

        <Route path="user-board/:id" element={<Layout_User />} >
          <Route index element={<User_Dashboard />} />
        </Route>

        <Route path="admin-board/:id" element={<Layout_Admin />}>
          <Route index element={<Admin_Dashboard />} />
        </Route>

        <Route path="area/orther" element={<Orther_Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
