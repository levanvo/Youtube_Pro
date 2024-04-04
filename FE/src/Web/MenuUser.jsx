import React, { useState, useEffect, useContext } from 'react'
import {
    AppstoreOutlined,
    PieChartOutlined,
    RightOutlined,
    PlaySquareOutlined,
    IdcardOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import LanguageContext from '../LanguageProvider';


const MenuUser = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { language, changeLanguage } = useContext(LanguageContext);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    function getItem(label, key, icon, children, type) {
        return { key, icon, children, label, type, };
    }



    let items_USER = [
        collapsed ?
            getItem('', '0', <div className='w-[40px]' onClick={() => toggleCollapsed()}><RightOutlined /></div>)
            :
            getItem('', '0', <div className=' w-[200px] flex justify-center h-[40px] ' onClick={() => toggleCollapsed()}><LeftOutlined /></div>),
        getItem('Tổng quan', '1',<IdcardOutlined />),
        getItem('Danh sách', 'sub1', <PlaySquareOutlined />, [
            getItem('Đã thích', '5'),
            getItem('Xem sau', '6'),
        ]),
        getItem('Kênh của bạn', '2', <AppstoreOutlined />),
        getItem('USER', 'user-100', <PieChartOutlined />),
    ];

    const render_Menu_USER = () => {
        return <div className='home-nav-left'>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items_USER}
                className='h-[91vh] shell-1'
            />
        </div>
    }

    return render_Menu_USER();
}

export default MenuUser