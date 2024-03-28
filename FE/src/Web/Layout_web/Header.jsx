import React, { useEffect, useState, useContext } from 'react';
import "../../scss/Home+Herder.scss";
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
  AudioOutlined, CustomerServiceOutlined, DeploymentUnitOutlined,
  RiseOutlined, StarOutlined, BellOutlined, UserOutlined,
  LogoutOutlined, AreaChartOutlined
} from '@ant-design/icons';
import { Input, Space, Button, Tooltip, Avatar, Drawer, Modal } from 'antd';
import { get_SessionStorage } from '../../Services/Api';
const { Search } = Input;
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LanguageContext from '../../LanguageProvider';
import 'animate.css';

const Header = () => {
  const [Profile, setProfile] = useState({});
  const [loadings, setLoadings] = useState([]);
  const [openHerderUser, setOpenHerder_User] = useState(false);
  const [isModalOpen_logout, setIsModalOpen_logout] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

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
      <div className="">
        <h2 className='leading-[46px] font-bold text-gray-600'>{Profile?.name}</h2>
      </div>
      <img className='w-[45px] rounded-full' src={Profile?.picture} />
    </div>
  };
  const handleClick_MIC = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className='w-[100%] flex flex-wap space-x-5 h-16 bg-gray-50 herder-shell-ouside'>

      <div className="shell-left-herder flex space-x-20 xl:space-x-32">
        <div className="shell-youtube-icon ml-[45px] pt-6 flex" onClick={() => changeLanguage('area-web')}>
          <Link to={window.location.origin + "/youtube.com"}><FaYoutube className='youtube-icon' /></Link>
          <Link to={window.location.origin + "/youtube.com"}><h2 className='ml-6 -mt-1 font-bold'>Youtube+</h2></Link>
        </div>

        <div className="shell-search mt-4 flex space-x-5">
          <Space direction="vertical">
            <Search placeholder="Tìm kiếm" allowClear
              onSearch={onSearch} className='w-48 md:w-[300px] xl:w-[500px] ' />
          </Space>

          <Stack className='shell-micro m-[2px]' direction="row" spacing={1}>
            <Chip className='bg-gray-100 hover:bg-gray-200 duration-200 cursor-pointer' label={<AudioOutlined style={{ fontSize: 16, color: "gray" }} />} variant="outlined" onClick={handleClick_MIC} >
            </Chip>
          </Stack>

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
          {Profile?.scopes && !Profile.scopes?.includes("admin") &&
            <div className="shell-notification ">
              <Tooltip placement="topLeft" title={"Tải lên video của bạn"}>
                <VideoCallOutlinedIcon className='scale-125 mt-[2px] text-gray-500 cursor-pointer ' />
              </Tooltip>
            </div>
          }
          <div className="shell-notification animate__animated animate__flash animate__infinite">
            <NotificationsOutlinedIcon className=' text-gray-500 cursor-pointer ' />
          </div>
          <div className="shell-profile -mt-[7px] flex space-x-1">
            <Avatar onClick={showDrawer} style={{ verticalAlign: 'middle', cursor: "pointer" }} size="large"> {<img className='scale-125' src={Profile?.picture} />}  </Avatar>
            <Drawer title={dataHerderUser()} onClose={onClose} open={openHerderUser}>

              <div className="h-[92%]">
                {
                  Profile?.scopes ?
                    Profile.scopes?.includes("admin") ?
                      <Link onClick={() => changeLanguage(`area-profile-admin`)} to={`admin-board/${Profile?._id}`}><p onClick={() => setOpenHerder_User(false)} className='hover:bg-gray-400 rounded-full p-2 flex space-x-2 justify-center hover:text-white duration-[0.1s]'><UserOutlined /><span>Your profile</span></p></Link>
                      :
                      <Link onClick={() => changeLanguage(`area-profile-user`)} to={`user-board/${Profile?._id}`}><p onClick={() => setOpenHerder_User(false)} className='hover:bg-gray-400 rounded-full p-2 flex space-x-2 justify-center hover:text-white duration-[0.1s]'><UserOutlined /><span>Your profile</span></p></Link>
                    :
                    window.location.origin
                }

                <Link onClick={() => changeLanguage('area-orther')} to={`area/orther`}><p onClick={() => setOpenHerder_User(false)} className='hover:bg-gray-400 rounded-full p-2 flex space-x-2 justify-center hover:text-white duration-[0.1s]'><AreaChartOutlined /><span>Other</span></p></Link>
                <button className='hover:bg-gray-400 rounded-full p-[7px] cursor-pointer flex space-x-2 justify-center hover:text-white w-full duration-[0.1s]'><SettingsOutlinedIcon /><span>Setting</span></button>
              </div>
              <p className='hover:bg-red-500 bg-red-400 text-white text-center cursor-pointer p-2 rounded-md font-bold ' onClick={() => showModal_logout()}><span className='mr-1'>Log-out</span><LogoutOutlined className='mt-1' /></p>

            </Drawer>
          </div>
        </div>
      </div>
      <Modal title="Are you sure Sign-out ?" open={isModalOpen_logout} onOk={handleOk_logout} onCancel={handleCancel_logout}> </Modal>
    </div>
  )
}

export default Header