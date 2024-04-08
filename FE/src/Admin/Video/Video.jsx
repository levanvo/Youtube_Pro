import React, { useState, useEffect } from 'react';
import MenuVideo from './MenuVideo';
import { Input, Drawer, Button, Space, Form, Select, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { get_SessionStorage, instance } from '../../Services/Api';

const { Search } = Input;
const { TextArea } = Input;

const Video = () => {
  const [formAddVideo] = Form.useForm();
  const [open_Add_Video, setOpen_Add_Video] = useState(false);
  const [signalCreated_Video, setSignalCreate_video] = useState(true);
  const [link_Video, setLink_Video] = useState("");
  const [dataChanel_one, setDataChanel_one] = useState({});
  const [dataVideo, setData_Video] = useState([]);
  const [message_Chanel, context_Chanel] = message.useMessage();

  const { tokenUser, _id, email } = get_SessionStorage("user.profile");


  const onSearch_Video = (value, _e, info) => {

  };

  useEffect(() => {
    const fetchAPI_Video = async () => {
      const { data } = await instance.get(`/all-Video`, {
        headers: {
          Authorization: tokenUser,
        },
      });
      data.dataVideo && data.dataVideo.length && setData_Video(data.dataVideo);
    };
    fetchAPI_Video();

    const one_Chanels = async () => {
      const { data } = await instance.get(`/one-Chanel/${_id}&_idUser_Chanels`, {
        headers: {
          Authorization: tokenUser,
        },
      });
      if (!data.dataOrigin_Chanels || data == null || data.dataOrigin_Chanels.is_Active == false) {
        setSignalCreate_video(false);
      } else {
        setDataChanel_one(data.dataOrigin_Chanels);
      };
    };
    one_Chanels();
  }, []);

  // add-Video

  const showLargeDrawer = () => {
    if (!signalCreated_Video) {
      setOpen_Add_Video(false);
      message_Chanel.info("Kênh của bạn chưa được tạo hoặc đã bị khóa !");
      return;
    }
    setOpen_Add_Video(true);
  };
  const onClose_Add_Video = () => {
    formAddVideo.resetFields();
    setOpen_Add_Video(false);
  };

  // const handleChange = (value) => {}

  const onFinish = async (values) => {
    if (!signalCreated_Video) {
      message_Chanel.error('Hãy tạo kênh trước nhé..');
      return;
    };

    if (values.link_video.includes("watch?v=")) {
      values.link_video = values.link_video.replace("watch?v=", "embed/");
    };
    const { content_video, creater_video, link_video, mood_video, resource_video, title_video } = values;
    const objectVideo = {
      title_video: title_video,
      content: content_video,
      author: creater_video,
      link_video: link_video,
      mood_type: mood_video,
      Source_root: resource_video,
      name_chanels: dataChanel_one.name_chanels,
      chanels_ID: dataChanel_one._id,
      comments_count: 0,
      view_count: 0,
      likes_count: 0,
      share_count: 0,
      dislikes_count: 0,
    };

    const addVideo = await instance.post(`/create-Video`, objectVideo);
    formAddVideo.resetFields();
    if (addVideo.status == 200) {
      message_Chanel.success("Tải lên video thành công.");
    } else {
      message_Chanel.error("Lỗi tải lên !!!");
    };
  };
  const onFinishFailed = (errorInfo) => {
    message_Chanel.error("Lỗi thêm video, hãy nhập đầy đủ !!");
  };

  const Preview_video = (event) => {
    let linkVideo = event.target.value;
    if (linkVideo.includes("watch?v=")) {
      linkVideo = linkVideo.replace("watch?v=", "embed/");
    };

    setLink_Video(linkVideo);
  };
  const Mood_video = [
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

  const RemoveVideo = async ({idRoot, idChanel})=>{
    console.log(idChanel, idRoot);
  };

  const cancel__Remove=(e)=>{}

  return (
    <div className="flex home-shell-outside">
      {context_Chanel}
      <MenuVideo />
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_Video p-2">
          <div className="shell_title_list_video h-8 flex justify-between">
            <h2 className='text-gray-600'>Video: {dataVideo?.length}</h2>
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
                    <Form name="basic" form={formAddVideo} labelCol={{
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
                            placeholder={`${signalCreated_Video ? dataChanel_one?.name_chanels : "không xác định !!"}`}
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
                        <Input onChange={Preview_video} name='link_video' addonBefore="https:" placeholder='https://www.youtube.com/watch?v=nFW50SYmpoM' />
                      </Form.Item>
                      <iframe className='border rounded-md w-[100%]' height={230} src={link_Video && link_Video.includes("https://www.youtube.com/") && link_Video} frameBorder="0"></iframe>
                    </Form>

                  </div>
                </div></Drawer>
            </div>
          </div>
          <hr />

          <div className="shell_list_user w-[100%] h-[81vh] rounded-md select-none ">
            <table className=' w-[100%] rounded-md select-none text-center'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Link-video</th>
                  <th>Tạo bởi</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {dataVideo.length > 0 && dataVideo.map((items, index) => {
                  return <tr key={index} className='hover:bg-gray-200 cursor-pointer'>
                    <td>{index + 1}</td>
                    <td className='mt-3'>{items?.link_video}</td>
                    <td className='mt-3'>{items?.author}</td>
                    <td>
                        <Popconfirm
                          title={`Xóa video này của ${items?.author}, ngừng phát trên toàn quốc !`}
                          description="Bạn chắc chứ ?"
                          onConfirm={() => RemoveVideo({idRoot:items?._id, idChanel: items?.chanels_ID})}
                          onCancel={cancel__Remove}
                          okText="Đúng"
                          cancelText="Thôi"
                        >
                          <Button className='text-white bg-red-500'>Gỡ bỏ</Button>
                        </Popconfirm>
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

export default Video
// export default () => (
//   <App>
//     <Video />
//   </App>
// );