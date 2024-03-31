import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Menu_Users from './Menu_Users';

const Users = () => {
    return (
        <div className="flex home-shell-outside">
            <Menu_Users />

            <div className="w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
                <div className="conten_Users p-2">
                    Users
                </div>
            </div>
        </div>
    )
}

export default Users