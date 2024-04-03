import React, { useState, useEffect } from 'react';
import MenuVideo from './MenuVideo';
import { Input, Drawer, Button, Space, Form, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { get_SessionStorage, instance } from '../../Services/Api';

const { Search } = Input;
const { TextArea } = Input;

const Video = () => {
  const [open_Add_Video, setOpen_Add_Video] = useState(false);
  const [signalCreated_Video, setSignalCreate_video]=useState(true);
  const [link_Video, setLink_Video] = useState("");
  const dispatch = useDispatch();
  const { dataChanels } = useSelector((items) => items.Info_chanels);
  const { tokenUser } = get_SessionStorage("user.profile");

  const onSearch_Video = (value, _e, info) => {
    console.log(info?.source, value)
  };

  // useEffect(() => {
  //   const fetchApi_Chanels = async () => {
  //     const { data } =await instance.get("/all-Chanel", {
  //       headers: {
  //         Authorization: tokenUser,
  //       },
  //     });
  //     dispatch({ type: "fetch-Chanels", payload: data.dataChanels });
  //     if(!data.dataChanels.length){
  //       setSignalCreate_video(false)
  //     };
  //   };
  //   fetchApi_Chanels();
  // }, []);
  
  // add-Video

  const showLargeDrawer = () => {
    setOpen_Add_Video(true);
  };
  const onClose_Add_Video = () => {
    setOpen_Add_Video(false);
  };

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  const onFinish = (values) => {
    if (!values.chanel_video) {
      values.chanel_video = "levanvo";
    };
    if (values.link_video.includes("watch?v=")) {
      values.link_video = values.link_video.replace("watch?v=", "embed/");
    };


    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Preview_video = (event) => {
    let linkVideo = event.target.value;
    if (linkVideo.includes("watch?v=")) {
      linkVideo = linkVideo.replace("watch?v=", "embed/");
    };
    // https://www.youtube.com/embed/8TyxiwMK3Rk
    // https://www.youtube.com/watch?v=8TyxiwMK3Rk
    setLink_Video(linkVideo);
  };
  const Mood_video = [
    {
      label: 'Vui vẻ', desc: 'Vui vẻ',
      value: 'vui',
      emoji: '))',
    },
    {
      label: 'Buồn', desc: 'Buồn',
      value: 'buon',
      emoji: '))',
    },
    {
      label: 'Phim ảnh', desc: 'Phim ảnh',
      value: 'phim',
      emoji: '))',
    },
    {
      label: 'Rap', desc: 'Rap',
      value: 'rap',
      emoji: '))',
    },
    {
      label: 'Thư giãn', desc: 'Thư giãn',
      value: 'thu_gian',
      emoji: '))',
    },
    {
      label: 'Vlog, Đời sống, cá nhân', desc: 'Vlog, Đời sống, cá nhân',
      value: 'vlog',
      emoji: '))',
    },
  ];

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
                className={``}
                title={`Biên soạn Video`}
                placement="right"
                size={"large"}
                onClose={onClose_Add_Video}
                open={open_Add_Video}
              // extra={
              //   <Space>
              //     <Button onClick={onClose_Add_Video}>Hủy</Button>
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
                          <Button className='w-24' onClick={onClose_Add_Video}>Hủy</Button>
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
                        name="mood_video"
                        rules={[{
                          required: true,
                          message: 'Bắt buộc !',
                        },]} >
                        <Select mode="multiple" options={Mood_video}
                          optionLabelProp="label"
                          style={{ width: '100%' }}
                          placeholder="Chủ đề video .."
                          // defaultValue={['china']}
                          // onChange={handleChange}
                          optionRender={(Mood_video) => (
                            <Space>
                              <span role="img" aria-label={Mood_video.data.label}>
                                {Mood_video.data.emoji}
                              </span>
                              {Mood_video.data.desc}
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
                          <Input style={{ width: 200 }} className='pl-2' placeholder='Ai tạo ra video này ..' />
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
                            placeholder="Select a person"
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
                        <Input onChange={Preview_video} name='link_video' addonBefore="https:" placeholder='link embed,vv ..' />
                      </Form.Item>
                      <iframe className='border rounded-md w-[100%]' height={230} src={link_Video} frameBorder="0"></iframe>
                    </Form>

                  </div>
                </div></Drawer>
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