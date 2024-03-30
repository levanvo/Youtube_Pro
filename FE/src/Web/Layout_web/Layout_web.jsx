import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from './Footer'
import MenuPage from '../MenuPage'

const Layout_web = () => {
    return (
        <div className=''>
            <Header />
            <div className="flex home-shell-outside">
                <MenuPage />
                <div className="w-[100%] h-auto bg-gray-500 p-2 rounded-md m-1">
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout_web