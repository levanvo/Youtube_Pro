import React, { useState, useEffect, useContext } from 'react'
import "../../scss/Home+Herder.scss"
import {
    AppstoreOutlined,
    MailOutlined,
    PieChartOutlined,
    RightOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import LanguageContext from '../../LanguageProvider';

const MenuVideo = () => {

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
                getItem(<Link to="video2">Biên soạn4</Link>, '4', <MailOutlined />),
            ]}
            className='h-[88vh] shell-1 w-44 rounded-md'
        />
    )
}

export default MenuVideo