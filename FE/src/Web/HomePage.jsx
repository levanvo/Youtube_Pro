import React, { useState, useEffect } from 'react'
import "../css/Home+Herder.scss"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  RightOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';


const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type, };
  }

  const items = [
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

  return (
    <div className="flex home-shell-outside">
      <div className=''>
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          // theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          className='h-[91vh] shell-1'
        />
      </div>
      <div className="w-[100%] h-auto bg-gray-500 shell-2 p-2 rounded-md m-1">
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />



        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />



        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />


        v
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />


        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br /><h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br /><h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />




        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />


        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
      </div>
    </div>
  )
}

export default HomePage