import React, { useState, useEffect } from 'react';
import MenuChanels from './MenuChanels';
import { Input, Drawer, Button, Space, Form, Select, message, Popconfirm } from 'antd';
import { get_SessionStorage, instance } from '../../Services/Api';
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;
const { TextArea } = Input;
const Chanels = () => {
  const [message_Chanel, context_Chanel] = message.useMessage();
  const [open_Add_Chanels, setOpen_Add_Chanels] = useState(false);
  const { tokenUser, _id } = get_SessionStorage("user.profile");
  const dispatch = useDispatch();
  const dataChanels = useSelector((chanels) => chanels.Info_chanels).dataChanels;

  useEffect(() => {
    const fetchAPI_chanels = async () => {
      const { data } = await instance.get("/all-Chanel", {
        headers: {
          Authorization: tokenUser
        }
      });
      dispatch({ type: "fetch-Chanel", payload: data.dataChanels });
    };
    fetchAPI_chanels();
  }, []);

  const fetchOne_Chanel = async () => {
    const dataOne_chanel = await instance.get(`/one-Chanel/${_id}&_idUser_Chanels`);
    const oneChanel = dataOne_chanel.data.dataOrigin_Chanels;

    if (oneChanel == null || oneChanel == undefined) {
      return true;
    };

    return false;
  };
  const onSearch_Channels = (value, _e, info) => {
    
  };

  const showLargeDrawer = () => {
    setOpen_Add_Chanels(true);
  };

  const onClose_Add_Chanels = () => {
    setOpen_Add_Chanels(false);
  };
  const onFinish = async (values) => {
    const objectChanels = {
      name_chanels: values.title_chanels,
      ID_user_root: _id,
      video_ID: [],
      tiktok_shorts_ID: [],
      radio_ID: [],
      subscribes_User_ID: [],
      is_Active: true
    };

    const resultOne_chanel = await fetchOne_Chanel();
    if (resultOne_chanel) {
      const dataChanel_add = await instance.post(`/add-Chanel`, objectChanels, {
        headers: {
          Authorization: tokenUser
        }
      });
      dispatch({ type: "add-Chanel", payload: dataChanel_add })
      message_Chanel.success("Ok !!");
    } else {
      message_Chanel.info("Chỉ được tạo 1 kênh duy nhất !!");
    };
  };

  const onFinishFailed = (errorInfo) => {
    message_Chanel.error("Lỗi tạo kênh !!");
  };

  const Stop_chanel = async (_idChanel) => {
    const dataActive = await instance.patch(`/isActive-Chanel/${_idChanel}`, { is_Active: false }, {
      headers: {
        Authorization: tokenUser
      }
    });
    dispatch({ type: "actice-Chanel", payload: dataActive });
    message.success('Xác nhận hành động');
  };

  const Run_chanel = async (_idChanel) => {
    const dataActive = await instance.patch(`/isActive-Chanel/${_idChanel}`, { is_Active: true }, {
      headers: {
        Authorization: tokenUser
      }
    });
    dispatch({ type: "actice-Chanel", payload: dataActive });
    message.success('Xác nhận hành động');
  };
  const cancel__Active = (e) => {};

  return (
    <div className="flex home-shell-outside shell-Admin-manage">
      {context_Chanel}
      <MenuChanels />
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_Chanels p-2">
          <div className="shell_title_list_user h-8 flex justify-between">
            <h2 className='text-gray-600'>Số lượng kênh: {dataChanels?.length}</h2>
            <div className="search_video -mt-1">
              <Search style={{ width: '500px' }} placeholder="tìm kênh..." onSearch={onSearch_Channels} enterButton />
            </div>
            <div className="add_video -mt-1">
              <Space><Button type="primary" onClick={showLargeDrawer}>Tạo kênh</Button></Space>
              <Drawer
                className={``}
                title={`Tạo kênh của bạn`}
                placement="right"
                size={"large"}
                onClose={onClose_Add_Chanels}
                open={open_Add_Chanels}
              // extra={
              //   <Space>
              //     <Button onClick={onClose_Add_Chanels}>Hủy</Button>
              //     <Button type="primary">Tải lên</Button>
              //   </Space>}
              ><div className="flex">
                  <div className="w-[100%]  -mt-6 h-[615px]">
                    <Form name="basic" labelCol={{
                      span: 5,
                    }} wrapperCol={{
                      span: 16,
                    }} style={{
                      maxWidth: 600,
                    }} initialValues={{
                      remember: true,
                    }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
                    >
                      <Form.Item>
                        <div className="flex justify-between w-[37vw] ">
                          <Button className='w-24' onClick={onClose_Add_Chanels}>Hủy</Button>
                          <Button className='w-24' htmlType="submit" type="primary">Tạo</Button>
                        </div>
                      </Form.Item>

                      <Form.Item
                        className='-mt-3'
                        label="Tên kênh"
                        name="title_chanels"
                        rules={[
                          {
                            required: true,
                            message: 'Bắt buộc !',
                          },
                        ]}
                      >
                        <Input maxLength={20} placeholder='nhập tên kênh ..' />
                      </Form.Item>
                    </Form>

                  </div>
                </div>
              </Drawer>
            </div>
          </div>
          <hr />
          <div className="shell_list_Admin w-[100%] h-[81vh] rounded-md select-none">
            <table className=' w-[100%] rounded-md select-none text-center'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên kênh</th>
                  <th>Videos</th>
                  <th>Tiktok shorts</th>
                  <th>Radios</th>
                  <th>Số người đăng kí</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {dataChanels.length > 0 && dataChanels.map((items, index) => {
                  return <tr key={index} className='hover:bg-gray-200'>
                    <td>{index + 1}</td>
                    <td>{items?.name_chanels}</td>
                    <td className='mt-3'>{items?.video_ID?.length}</td>
                    <td className='mt-3'>{items?.tiktok_shorts_ID?.length}</td>
                    <td className='mt-3'>{items?.radio_ID?.length}</td>
                    <td className='mt-3'>{items?.subscribes_User_ID?.length}</td>
                    <td>
                      {items?.is_Active ?
                        <Popconfirm
                          title="Dừng kênh này"
                          description="Bạn có chắc với hành động này ?"
                          onConfirm={() => Stop_chanel(items?._id)}
                          onCancel={cancel__Active}
                          okText="Đúng"
                          cancelText="Thôi"
                        >
                          <Button className='text-white bg-red-500'>Dừng kênh</Button>
                        </Popconfirm>
                        :
                        <Popconfirm
                          title="Cho phép kênh này hoạt động trở lại"
                          description="Bạn có chắc với hành động này ?"
                          onConfirm={() => Run_chanel(items?._id)}
                          onCancel={cancel__Active}
                          okText="Đúng"
                          cancelText="Thôi"
                        >
                          <Button className='text-white bg-green-500'>Khởi chạy</Button>
                        </Popconfirm>
                      }
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chanels