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

    useEffect( () => {
        const fetchMovies = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_API_MOVIE}`);
            const resultMovies = result.data?.results;

            const ALL = await Promise.all(resultMovies?.map(async(item)=>{
                const result = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${import.meta.env.VITE_API_API_MOVIE}`);
                return (result.data);
            }));
            setDataMovies(ALL);
        };
        fetchMovies();
    }, []);

    console.log("DATA: ",dataMovies);
    return (
        <div className="p-2 Top-Page w-[100%] h-[100%]">
            <div className='area_Movies flex flex-wrap justify-center w-[100%] h-[100%]'>
                {
                    dataMovies?.map((items, index) => {
                        return <div className="w-[27%] h-[40%] mx-7 relative" key={index}>
                            <Image className='rounded-md' src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`} />
                            <a href={`https://www.themoviedb.org/movie/${items.id}`} target="_blank"><h2 className=' text-gray-600'>{items.title}</h2></a>
                        </div>
                    })
                }
            </div>
            {scrollTop && <p onClick={() => scrollToTop()}><UpCircleOutlined className='text-gray-300 cursor-pointer fixed top-[92vh] right-[3vw]' style={{ scale: "2.5" }} /></p>}

        </div>
    )
}

export default Movies