import React, { useState, useEffect } from 'react';
import { Input, Drawer, Button, Space, Form, Select, message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { get_SessionStorage, instance } from '../../Services/Api';


const Video_User = () => {


  return (
    <div className="flex home-shell-outside">
      {context_Chanel}
      {/* <MenuVideo /> */}
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_Video p-2">
          <div className="shell_title_list_user h-8 flex justify-between">
            <h2 className='text-gray-600'>Video: 0</h2>

          </div>
          <hr />
          <div className="shell_list_user w-[100%] h-[81vh] rounded-md select-none ">
            Video-User

          </div>
        </div>
      </div>
    </div>
  )
}

export default Video_User
