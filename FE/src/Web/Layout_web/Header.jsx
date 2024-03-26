import React, { useEffect, useState } from 'react';
import "../../css/Home+Herder.scss";
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from "axios";
import { AudioOutlined, CustomerServiceOutlined, DeploymentUnitOutlined, RiseOutlined, StarOutlined, BellOutlined } from '@ant-design/icons';
import { Input, Space, Button, Tooltip, Avatar, Drawer } from 'antd';
import url from "url";
import querystring from "querystring";
const { Search } = Input;


const Header = () => {
  const [loadings, setLoadings] = useState([]);
  const [openHerderUser, setOpenHerder_User] = useState(false);
  const [user, setUser] = useState("Lucy");
  const [color, setColor] = useState("#f56a00");

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 600);
  };

  const showDrawer = () => {
    setOpenHerder_User(true);
  };
  const onClose = () => {
    setOpenHerder_User(false);
  };

  const dataHerderUser = () => {
    return <div className='h-[45px] flex space-x-2 float-right '>
      <h2 className='leading-[42px]'>Le Van VoLe Van VoLe</h2>
      <img className='w-[45px] rounded-full' src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*" />
    </div>
  };

  return (
    <div className='w-[100%] flex flex-wap space-x-5 h-16 bg-gray-50 herder-shell-ouside'>

      <div className="shell-left-herder flex space-x-20 xl:space-x-32">
        <div className="shell-youtube-icon ml-10 pt-5 flex">
          <FaYoutube className='youtube-icon' />
          <h2 className='ml-6 -mt-1 font-bold'>Youtube+</h2>
        </div>

        <div className="shell-search mt-4 flex space-x-5">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              className='w-48 md:w-[300px] xl:w-[500px] '
            />
          </Space>

          <div className="">
            <AudioOutlined style={{ fontSize: 16, color: "gray" }} className='p-[11px] -mt-[1px] rounded-full bg-gray-100 hover:bg-gray-200 duration-200 cursor-pointer' />
          </div>

        </div>
      </div>

      <div className="shell-right-herder flex justify-between h-10 w-full ">
        <div className="shell-r-1 flex space-x-3">
          <Tooltip placement="topLeft" title={"Tổng hợp"}>
            <Button className='' icon={<DeploymentUnitOutlined />} loading={loadings[999]} onClick={() => enterLoading(999)} />
          </Tooltip>
          <Tooltip placement="topLeft" title={"Xu hướng"}>
            <Button className='' icon={<RiseOutlined />} loading={loadings[0]} onClick={() => enterLoading(0)} />
          </Tooltip>
          <Tooltip placement="topLeft" title={"Mới cập nhật"}>
            <Button className='' icon={<StarOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)} />
          </Tooltip>
          <Tooltip placement="topLeft" title={"Radio ngắn"}>
            <Button className='' icon={<CustomerServiceOutlined />} loading={loadings[3]} onClick={() => enterLoading(3)} />
          </Tooltip>
        </div>
        <div className="shell-r-2 mt-[20px] mr-6 flex space-x-5">
          <div className="shell-notification ">
            <BellOutlined className='scale-150 text-gray-500 cursor-pointer' />
          </div>
          <div className="shell-profile -mt-[7px] flex space-x-1">
            {/* <h1 className='mt-2'>Lucky</h1> */}
            <Avatar onClick={showDrawer} style={{ backgroundColor: color, verticalAlign: 'middle', cursor: "pointer" }} size="large"> {user} </Avatar>
            <Drawer title={dataHerderUser()} onClose={onClose} open={openHerderUser}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>

            </Drawer>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
// http://localhost:3000/?code=4%2F0AeaYSHCKcRhgdRwoUNvP_MOxE5ROUKCC-hMWKDxllg8P-OT7BIS_4JV-viKDQY_D8m_Idg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=none
// http://localhost:3000/?code=4%2F0AeaYSHCeQBuqosnuIpR-YnsjiuXAKV0SI1sxzI_wRYu7gK7hNirHvyk4BTu0AcH_duSloQ&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none