import React from 'react';
import MenuPage from '../Web/MenuPage';
import { useDispatch, useSelector } from "react-redux";

const Main_Profile = () => {
    return (
        <div className="flex home-shell-outside">
            <MenuPage/>
            <div className="home-nav-right w-[100%] h-auto bg-gray-500 shell-2 p-2 rounded-md m-1">
                Main-Board
            </div>
        </div>
    )
}

export default Main_Profile