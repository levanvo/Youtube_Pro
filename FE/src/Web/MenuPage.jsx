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
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Option 3', '3', <ContainerOutlined />),
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),
        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
    ];
    let items_PROFILE = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Option 3', '3', <ContainerOutlined />),
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),
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
        if (language == "area-profile") {
            return <div className='home-nav-left'>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items_PROFILE}
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