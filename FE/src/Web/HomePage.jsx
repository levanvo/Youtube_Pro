import React, { useState, useEffect } from 'react';
import { instance } from '../Services/Api';
import {
  UpCircleOutlined,
} from "@ant-design/icons";

const HomePage = () => {
  const [scrollTop, setScrollTop] = useState(true);
  const [dataVideos, setData_Videos] = useState([]);
  const scrollToTop = () => {
    const header = document.querySelector('.Top-Page')
    header && header.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchAPI_videos = async () => {
      const { data } = await instance.get(`/all-Video`);
      const { dataVideo } = data;
      setData_Videos(dataVideo);
    };
    fetchAPI_videos();
  }, []);

  return (
    <div className="p-2 Top-Page w-[100%] h-[100%]">
      <div className='area_Videos flex flex-wrap justify-center w-[100%] h-[100%]'>
        {
          dataVideos?.map((items, index) => {
            return <div className="w-[27%] h-[40%] mx-7" key={index}>
              <iframe className='w-[100%] h-[70%] rounded-xl' src={items?.link_video} frameBorder="0"></iframe>
              <p>{items?.title_video.length>70 ? (items?.title_video.slice(0,70)+" ..."):items?.title_video}</p>
              <div className="flex justify-between">
                <p className='text-gray-500 mt-1 ml-3'>Lượt xem: {items.view_count}</p>
                <p className='text-xs mt-2'>{(items.createdAt.replace("T"," / ")).slice(0,21)}</p>
              </div>
            </div>
          })
        }
      </div>
      {scrollTop && <p onClick={() => scrollToTop()}><UpCircleOutlined className='text-white cursor-pointer fixed top-[92vh] right-[3vw]' style={{ scale: "2.5" }} /></p>}

    </div>

  )
}

export default HomePage