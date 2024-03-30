import React, { useState, useEffect, useContext } from 'react'
import {
    AppstoreOutlined,
    HomeOutlined,
    TikTokOutlined,
    PlaySquareOutlined,
    PieChartOutlined,
    RightOutlined,
    HeartOutlined,
    WalletOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import LanguageContext from '../LanguageProvider';


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
        getItem('Trang chủ', '1', <HomeOutlined />),
        getItem('Tiktok shorts', '2', <TikTokOutlined />),
        getItem('Danh sách', 'sub1', <PlaySquareOutlined />, [
            getItem('Đã thích', '5', <HeartOutlined />),
            getItem('Xem sau', '6', <WalletOutlined />),
        ]),
        getItem('Kênh của bạn', 'sub2', <AppstoreOutlined />, [
            getItem('null', '9'),
            getItem('null', '10'),
            // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
        getItem('Chính sách của chúng tôi', '100', <PieChartOutlined />),
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