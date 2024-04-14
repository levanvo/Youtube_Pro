import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../Services/Api';

const Detail_Videos = () => {
  const {id} = useParams();
  const [dataOne_Video, setDataOne_Video] = useState({});

  useEffect(()=>{
    const getOne_Video = async()=>{
      const {data} = await instance.get(`one-Video/${id}`);
      setDataOne_Video(data?.dataVideo)
    };
    getOne_Video();
  },[]);

  return (
    <div className="p-2 Top-Page w-[100%] h-[100%] border flex">
      <div className={`w-[65%] h-[75%] border`}>
        <iframe className='w-[100%] h-[100%] rounded-xl' src={dataOne_Video?.link_video} frameBorder="0"></iframe>
        <p className='text-xl m-2'>{dataOne_Video?.title_video}</p>
      </div>

      <div className="">
        <h2 className='ml-5 text-lg'>Liên quan đến :</h2>
      </div>

    </div>
  )
}

export default Detail_Videos