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
                <div className="home-nav-right shell-2 w-[100%] h-[90vh] bg-gray-500  rounded-md m-1">
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout_web