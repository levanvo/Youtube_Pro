import React, { useState, useEffect } from 'react';
import MenuVideo from './MenuVideo';
import { Input, Drawer, Button, Space } from 'antd';

const { Search } = Input;

const Video = () => {
  const [open_Add_Video, setOpen_Add_Video] = useState(false);

  const onSearch_Video = (value, _e, info) => {
    console.log(info?.source, value)
  };

  // add-Video

  const showLargeDrawer = () => {
    setOpen_Add_Video(true);
  };
  const onClose_Add_Video = () => {
    setOpen_Add_Video(false);
  };


  return (
    <div className="flex home-shell-outside">
      <MenuVideo />
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_Video p-2">
          <div className="shell_title_list_user h-8 flex justify-between">
            <h2 className='text-gray-600'>Video: 0</h2>
            <div className="search_video -mt-1">
              <Search style={{ width: '500px' }} placeholder="tìm video..." onSearch={onSearch_Video} enterButton />
            </div>
            <div className="add_video -mt-1">
              <Space><Button type="primary" onClick={showLargeDrawer}>Tải lên mới</Button></Space>
              <Drawer
                title={`Biên soạn Video`}
                placement="top"
                size={"large"}
                onClose={onClose_Add_Video}
                open={open_Add_Video}
                extra={
                  <Space>
                    <Button onClick={onClose_Add_Video}>Hủy</Button>
                    <Button type="primary">Tải lên</Button>
                  </Space>
                }>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>
          </div>
          <hr />
          <div className="shell_list_user w-[100%] h-[81vh] rounded-md select-none ">


          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
// export default () => (
//   <App>
//     <Video />
//   </App>
// );