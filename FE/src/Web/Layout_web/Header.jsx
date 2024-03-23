import React from 'react';
import "../../css/Home+Herder.scss";
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

const Header = () => {

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className='w-[100%] flex flex-wap h-16 bg-gray-50 herder-shell-ouside'>

      <div className="flex flex-warp space-x-10 xl:space-x-32">
        <div className="shell-youtube-icon ml-10 pt-5 flex">
          <FaYoutube className='youtube-icon' />
          <h2 className='ml-6 -mt-1 font-bold'>Youtube</h2>
        </div>

        <div className="shell-search mt-4 flex space-x-5">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              className='w-48 md:w-[400px] xl:w-[600px] '
            />
          </Space>

          <div className="">
            <AudioOutlined style={{ fontSize: 16, color:"gray" }} className='p-[11px] -mt-[1px] rounded-full bg-gray-100 hover:bg-gray-200 duration-200 cursor-pointer'/>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Header