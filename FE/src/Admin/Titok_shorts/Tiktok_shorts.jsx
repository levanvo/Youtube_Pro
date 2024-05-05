import React, { useEffect, useState } from 'react';
import Menu_TiktokShorts from './Menu_TiktokShorts';
import axios from "axios";
import { Input, Drawer, Button, Space, Form, Select, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { get_SessionStorage, instance } from '../../Services/Api';

const { Search } = Input;
const { TextArea } = Input;
const TiktokShorts = () => {
  const [formAddTiktokshorts] = Form.useForm();
  const [open_Add_Tiktokshorts, setOpen_Add_Tiktokshorts] = useState(false);
  const [link_Tiktokshort, setLink_Tiktokshort] = useState("");
  const { tokenUser, _id, email } = get_SessionStorage("user.profile");


  const onSearch_Tiktokshorts = (e) => { };

  const showLargeDrawer = () => {
    // if (!signalCreated_Video) {
    //   setOpen_Add_Tiktokshorts(false);
    //   message_Chanel.info("Kênh của bạn chưa được tạo hoặc đã bị khóa !");
    //   return;
    // }
    setOpen_Add_Tiktokshorts(true);
  };
  const onClose_Add_Tiktokshorts = () => {
    formAddTiktokshorts.resetFields();
    setOpen_Add_Tiktokshorts(false);
  };

  const onFinishFailed = (errorInfo) => {
    message_Chanel.error("Lỗi thêm dữ liệu tiktok-short, hãy nhập đầy đủ !!");
  };

  const onFinish = async () =>{

  };

  const Mood_Tiktokshorts = [
    {
      label: 'Vui vẻ', desc: 'Vui vẻ',
      value: 'vui',
      emoji: '😚',
    },
    {
      label: 'Buồn', desc: 'Buồn',
      value: 'buon',
      emoji: '😟',
    },
    {
      label: 'Phim ảnh', desc: 'Phim ảnh',
      value: 'phim',
      emoji: '🎬',
    },
    {
      label: 'Rap', desc: 'Rap',
      value: 'rap',
      emoji: '🎧',
    },
    {
      label: 'Thư giãn', desc: 'Thư giãn',
      value: 'thu_gian',
      emoji: '😌',
    },
    {
      label: 'Vlog, Đời sống, cá nhân', desc: 'Vlog, Đời sống, cá nhân',
      value: 'vlog',
      emoji: '👀',
    },
  ];

  const Preview_Tiktokshort = (event) => {
    let linkVideo = event.target.value;
    

    setLink_Tiktokshort(linkVideo);
  };

  return (
    <div className="flex home-shell-outside">
      <Menu_TiktokShorts />
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_TiktokShorts p-2">
          <div className="conten_Tiktokshorts p-2">
            <div className="shell_title_list_video h-8 flex justify-between">
              <h2 className='text-gray-600'>Video: null</h2>
              <div className="search_video -mt-1">
                <Input style={{ width: '400px' }} placeholder="tìm theo UUID..." onChange={onSearch_Tiktokshorts} />
              </div>
              <div className="add_video -mt-1">
                <Space><Button type="primary" onClick={showLargeDrawer}>Tải lên mới</Button></Space>
                <Drawer
                  className={``}
                  title={`Biên soạn Tiktok-Shorts`}
                  placement="right"
                  size={"large"}
                  onClose={onClose_Add_Tiktokshorts}
                  open={open_Add_Tiktokshorts}
                ><div className="flex">
                    <div className="w-[100%]  -mt-6 h-[615px]">
                      <Form name="basic" form={formAddTiktokshorts} labelCol={{
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
                            <Button className='w-24' onClick={onClose_Add_Tiktokshorts}>Hủy</Button>
                            <Button className='w-24' htmlType="submit" type="primary">Tải lên</Button>
                          </div>
                        </Form.Item>

                        <Form.Item
                          className='-mt-3'
                          label="Tiêu đề"
                          name="title_video"
                          rules={[
                            {
                              required: true,
                              message: 'Bắt buộc !',
                            },
                          ]}
                        >
                          <Input placeholder='nhập tiêu đề ..' />
                        </Form.Item>

                        <Form.Item
                          className='-mt-3'
                          label="Nội dung"
                          name="content_video"
                          rules={[
                            {
                              required: true,
                              message: 'Bắt buộc !',
                            },
                          ]}
                        >
                          <TextArea required rows={4} placeholder="Nội dung .." maxLength={250} />
                        </Form.Item>

                        <Form.Item
                          className='-mt-3'
                          label="Chủ đề"
                          name="mood_Tiktokshorts"
                          rules={[{
                            required: true,
                            message: 'Bắt buộc !',
                          },]} >
                          <Select mode="multiple" options={Mood_Tiktokshorts}
                            optionLabelProp="label"
                            style={{ width: '100%' }}
                            placeholder="Chủ đề video .."
                            // defaultValue={['china']}
                            // onChange={handleChange}
                            optionRender={(Mood_Tiktokshorts) => (
                              <Space>
                                <span role="img" aria-label={Mood_Tiktokshorts.data.label}>
                                  {Mood_Tiktokshorts.data.emoji}
                                </span>
                                {Mood_Tiktokshorts.data.desc}
                              </Space>
                            )}
                          />
                        </Form.Item>

                        <Form.Item
                          className='-mt-3'
                          label="Nguồn gốc"
                          name="resource_video"
                          rules={[{
                            required: true,
                            message: 'Bắt buộc !',
                          },]}>
                          <Input addonBefore="https:" placeholder='Nơi lấy vieo này, url,vv ..' />
                        </Form.Item>

                        <div className="flex justify-center -mt-4 space-x-5">
                          <Form.Item
                            label="Tạo bởi"
                            name="creater_video" >
                            <Input disabled style={{ width: 200 }} className='pl-2' placeholder={email} />
                          </Form.Item>

                          <Form.Item
                            label="Kênh"
                            name="chanel_video"
                          // defaultValue='{"jbbn"}'
                          >
                            <Select
                              style={{ width: 200 }}
                              className=''
                              disabled
                              placeholder={`không xác định !!`}
                              optionFilterProp="children"
                            // filterOption={filterOption}
                            // defaultValue={[{
                            //   value: 'penđing',
                            //   label: 'penđing',
                            // }]}
                            />
                          </Form.Item>
                        </div>

                        <Form.Item
                          className='-mt-3'
                          label="Link video"
                          name="link_video"
                          rules={[{
                            required: true,
                            message: 'Bắt buộc !',
                          },]}>
                          <Input onChange={Preview_Tiktokshort} name='link_video' addonBefore="https:" placeholder='https://www.youtube.com/watch?v=nFW50SYmpoM' />
                        </Form.Item>
                        {/* <iframe className='border rounded-md w-[100%]' height={230} src={link_Video && link_Video.includes("https://www.youtube.com/") && link_Video} frameBorder="0"></iframe> */}
                      </Form>

                    </div>
                  </div></Drawer>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiktokShorts