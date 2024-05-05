import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Web/HomePage";
import Layout_web from "./Web/Layout_web/Layout_web";
import NotFound from "./Web/Layout_web/NotFound";
import url from "url";
import querystring from "querystring";
import { get_SessionStorage, set_SessionStorage } from "./Services/Api";
import { LanguageProvider } from "./LanguageProvider";
import Orther_Page from "./Profile/Orther_Page";
import Layout_Admin from "./Admin/Layout_Admin";
import Layout_User from "./Profile/Layout_User";
import User_Dashboard from "./Profile/User_Dashboard";
import Admin_Dashboard from "./Admin/Admin_Dashboard";
import Video from "./Admin/Video/Video";
import TiktokShorts from "./Admin/Titok_shorts/Tiktok_shorts";
import Radio from "./Admin/Radio/Radio";
import Chanels from "./Admin/Chanels/Chanels";
import Orther from "./Admin/Orther/Orther";
import Users from "./Admin/Users/Users";
import Detail_Videos from "./Web/Detail_Videos/Detail_Videos";
import Movies from "./Web/Movies/Movies";

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

    const getURL = window.location.href;
    const privater = get_SessionStorage("user.profile");
    if(!privater && getURL.includes("youtube.com")){
      window.location.href=window.location.origin
    };
  }, []);


  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/youtube.com" element={<Layout_web />}>
          <Route index element={<HomePage />} />
          <Route path="detail_video/:id" element={<Detail_Videos />}/>
          <Route path="movie-discover" element={<Movies />} />

        </Route>

        <Route path="user-board/:id" element={<Layout_User />} >
          <Route index element={<User_Dashboard />} />
        </Route>

        <Route path="admin-board/:id" element={<Layout_Admin />}>
          <Route index element={<Admin_Dashboard />} />

          <Route path="video" element={<Video />} >

          </Route>

          <Route path="tiktok-shorts" element={<TiktokShorts />} >

          </Route>

          <Route path="radio" element={<Radio />} >

          </Route>

          <Route path="chanels" element={<Chanels />} >

          </Route>

          <Route path="users" element={<Users />} >

          </Route>

          <Route path="orther" element={<Orther />} >

          </Route>
        </Route>

        <Route path="area/orther" element={<Orther_Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
