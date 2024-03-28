import React, { useState, useEffect, useContext } from 'react'
import "../scss/Home+Herder.scss"
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    RightOutlined,
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
        getItem('Trang chủ', '1', <PieChartOutlined />),
        getItem('Tiktok shorts', '2', <DesktopOutlined />),
        getItem('Danh sách', 'sub1', <MailOutlined />, [
            getItem('Đã thích', '5'),
            getItem('Xem sau', '6'),
        ]),
        getItem('Kênh của bạn', 'sub2', <AppstoreOutlined />, [
            getItem('null', '9'),
            getItem('null', '10'),
            // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
        getItem('Chính sách của chúng tôi', '10', <PieChartOutlined />),
    ];
    let items_PROFILE_USER = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem('Tổng quan', '1', <PieChartOutlined />),
        getItem('Video', 'sub1', <MailOutlined onClick={()=>Switch_Video()}/>, [
            getItem('Đã thích', '5'),
            getItem('Xem sau', '6'),
        ]),
        getItem('USER', '2', <PieChartOutlined />),
        
    ];
    let items_PROFILE_ADMIN = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem('Tổng quan', '1', <PieChartOutlined />),
        getItem('Video', 'sub1', <MailOutlined onClick={()=>Switch_Video()}/>, [
            getItem('Biên soạn', '5'),
            getItem('Null', '6'),
            getItem('Null', '7'),
        ]),
        getItem('ADMIN', '2', <PieChartOutlined />),
    ];
    let items_OTHER = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Option 3', '3', <ContainerOutlined />),
    ];

    const render_Menu = () => {
        if (language == "area-web") {
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
        if (language == "area-profile-user") {
            return <div className='home-nav-left'>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items_PROFILE_USER}
                    className='h-[91vh] shell-1'
                />
            </div>
        }
        if (language == "area-profile-admin") {
            return <div className='home-nav-left'>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items_PROFILE_ADMIN}
                    className='h-[91vh] shell-1'
                />
            </div>
        }
        if (language == "area-orther") {
            return <div className='home-nav-left'>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items_OTHER}
                    className='h-[91vh] shell-1'
                />
            </div>
        }
    }

    return render_Menu();
}

export default MenuPage