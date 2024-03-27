import React, { useEffect, useState } from 'react';
import "../../scss/Home+Herder.scss";
import { FaYoutube } from 'react-icons/fa';
import { AudioOutlined, CustomerServiceOutlined, DeploymentUnitOutlined, RiseOutlined, StarOutlined, BellOutlined } from '@ant-design/icons';
import { Input, Space, Button, Tooltip, Avatar, Drawer, Modal } from 'antd';
import { get_SessionStorage } from '../../Services/Api';
const { Search } = Input;


const Header = () => {
  const [Profile, setProfile] = useState({});
  const [loadings, setLoadings] = useState([]);
  const [openHerderUser, setOpenHerder_User] = useState(false);
  const [isModalOpen_logout, setIsModalOpen_logout] = useState(false);

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

  const showModal_logout = () => {
    setIsModalOpen_logout(true);
  };
  const handleOk_logout = () => {
    sessionStorage.removeItem("user.profile");
    window.location.href = window.location.origin;
    setIsModalOpen_logout(false);
  };

  const handleCancel_logout = () => {
    setIsModalOpen_logout(false);
  };


  const showDrawer = () => {
    setOpenHerder_User(true);
  };
  const onClose = () => {
    setOpenHerder_User(false);
  };

  useEffect(() => {
    const data = get_SessionStorage("user.profile");
    setProfile(data);
  }, []);

  const dataHerderUser = () => {
    return <div className='h-[45px] flex space-x-2 float-right '>
      <h2 className='leading-[46px]'>{Profile?.name}</h2>
      <img className='w-[45px] rounded-full' src={Profile?.picture} />
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
            <Avatar onClick={showDrawer} style={{ verticalAlign: 'middle', cursor: "pointer" }} size="large"> {<img className='scale-125' src={Profile?.picture} />}  </Avatar>
            <Drawer title={dataHerderUser()} onClose={onClose} open={openHerderUser}>

              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p className='hover:bg-red-500 bg-red-400 text-white text-center cursor-pointer p-2 rounded-md font-bold mt-[66vh]' onClick={() => showModal_logout()}>Log-out</p>

            </Drawer>
          </div>
        </div>
      </div>
      <Modal title="Are you sure Sign-out ?" open={isModalOpen_logout} onOk={handleOk_logout} onCancel={handleCancel_logout}> </Modal>

    </div>
  )
}

export default Header