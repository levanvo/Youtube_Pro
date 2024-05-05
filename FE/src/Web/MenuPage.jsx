import React, { useState, useEffect, useContext } from 'react'
import {
    AppstoreOutlined,
    HomeOutlined,
    TikTokOutlined,
    DesktopOutlined,
    PlaySquareOutlined,
    PieChartOutlined,
    RightOutlined,
    HeartOutlined,
    WalletOutlined,
    LeftOutlined,
    CustomerServiceOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import LanguageContext from '../LanguageProvider';
import { Link } from 'react-router-dom';


const MenuPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { language, changeLanguage } = useContext(LanguageContext);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    function getItem(label, key, icon, children, type) {
        return { key, icon, children, label, type, };
    }


    let items_WEB = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem(<Link to="">Trang chủ</Link>, '1', <HomeOutlined />),
        // getItem('Tiktok shorts', '2', <TikTokOutlined />),
        getItem(<Link to="movie-discover">Movies</Link>, '3', <DesktopOutlined />),
        getItem(<Link to="">Radio</Link>, '4', <CustomerServiceOutlined />),
        getItem('Danh sách', 'sub1', <PlaySquareOutlined />, [
            getItem(<Link to="">Đã thích</Link>, '5', <HeartOutlined />),
            getItem(<Link to="">Xem sau</Link>, '6', <WalletOutlined />),
        ]),
        getItem('Kênh đăng kí', 'sub2', <AppstoreOutlined />, [
            getItem('null', '9'),
            getItem('null', '10'),
            // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
        getItem(<Link to="">Chính sách của chúng tôi</Link>, '100', <PieChartOutlined />),
    ];

    const render_Menu = () => {
        return <div className='home-nav-left'>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items_WEB}
                className='h-[91vh] shell-1'
            />
        </div>
    }

    return render_Menu();
}

export default MenuPage