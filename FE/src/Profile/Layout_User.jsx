import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import MenuProfile from "../Web/MenuProfile";

const Layout_User = () => {
    return (
        <div>
            <div className='w-[100%] flex flex-wap space-x-5 h-16 bg-gray-50 herder-shell-ouside'>

                <div className="shell-left-herder flex space-x-20 xl:space-x-32">
                    <div className="shell-youtube-icon ml-[45px] pt-6 flex" onClick={() => changeLanguage('area-web')}>
                        <Link to={window.location.origin + "/youtube.com"}><FaYoutube className='youtube-icon' /></Link>
                        <Link to={window.location.origin + "/youtube.com"}><h2 className='ml-6 -mt-1 font-bold'>Youtube+</h2></Link>
                    </div>
                </div>
            </div>

            <div className="flex home-shell-outside">
                <MenuProfile/>
                <div className="home-nav-right w-[100%] h-auto bg-gray-500 shell-2 p-2 rounded-md m-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout_User