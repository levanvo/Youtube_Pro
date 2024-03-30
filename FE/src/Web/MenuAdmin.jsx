import React, { useState, useEffect, useContext } from 'react'
import "../scss/Home+Herder.scss"
import {
    YoutubeOutlined,
    WindowsOutlined,
    CustomerServiceOutlined,
    PieChartOutlined,
    RightOutlined,
    TikTokOutlined,
    LeftOutlined,
    PlaySquareOutlined,
    TableOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import LanguageContext from '../LanguageProvider';


const MenuAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { language, changeLanguage } = useContext(LanguageContext);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            type,
            label,
        };
    }


    let items_ADMIN = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem(<Link to="">Tổng quan</Link>, '1', <WindowsOutlined />),
        getItem(<Link to="video">Video</Link>, '2', <YoutubeOutlined />),
        getItem(<Link to="video">Titok-shorts</Link>, '3', <TikTokOutlined />),
        getItem(<Link to="video">Radio</Link>, '4', <CustomerServiceOutlined />),
        getItem(<Link to="video">Kênh</Link>, '5', <PlaySquareOutlined />),
        getItem(<Link to="video">Khác</Link>, '5', <TableOutlined />),
        getItem('ADMIN', 'admin-100', <PieChartOutlined />),
    ];

    const render_Menu_ADMIN = () => {
        return <div className='home-nav-left'>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items_ADMIN}
                className='h-[91vh] shell-1'
            />
        </div>


    }

    return render_Menu_ADMIN();
}

export default MenuAdmin