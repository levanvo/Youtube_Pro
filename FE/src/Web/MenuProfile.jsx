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


const MenuProfile = () => {
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

export default MenuProfile