import React, { useState, useEffect, useContext } from 'react'
import {
    MailOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import LanguageContext from '../../LanguageProvider';

const Menu_TiktokShorts = () => {

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            type,
            label,
        };
    }

    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            items={[
                getItem(<Link to="video">Biên soạn</Link>, '1', <MailOutlined />),
                getItem(<Link to="video2">Crawl thêm dữ liệu</Link>, '2', <MailOutlined />),
                getItem(<Link to="video">Biên soạn3</Link>, '3', <MailOutlined />),
                getItem(<Link to="video2">Tiktok-shorts</Link>, '4', <MailOutlined />),
            ]}
            className='h-[87.7vh] shell-1 w-44 rounded-md'
        />
    )
}

export default Menu_TiktokShorts