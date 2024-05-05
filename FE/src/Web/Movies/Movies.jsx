import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    UpCircleOutlined,
  } from "@ant-design/icons";
import { Image } from 'antd';

const Movies = () => {
    const [scrollTop, setScrollTop] = useState(true);
    const [dataMovies, setDataMovies] = useState([]);


    const scrollToTop = () => {
        const header = document.querySelector('.Top-Page')
        header && header.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_API_MOVIE}`);
            setDataMovies(data?.results);
        };
        fetchMovies();
    }, []);

    console.log("dataMovies: ", dataMovies);
    return (
        <div className="p-2 Top-Page w-[100%] h-[100%]">
            <div className='area_Movies flex flex-wrap justify-center w-[100%] h-[100%]'>
                {
                    dataMovies?.map((items, index) => {
                        return <div className="w-[27%] h-[40%] mx-7 relative" key={index}>
                            <Image className='rounded-md' src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`} />
                            <h2 className=' text-gray-600'>{items.title}</h2>
                        </div>
                    })
                }
            </div>
            {scrollTop && <p onClick={() => scrollToTop()}><UpCircleOutlined className='text-white cursor-pointer fixed top-[92vh] right-[3vw]' style={{ scale: "2.5" }} /></p>}

        </div>
    )
}

export default Movies