import React, { useState, useEffect } from 'react';
import {
  UpCircleOutlined,
} from "@ant-design/icons";

const HomePage = () => {
  const [scrollTop, setScrollTop] = useState(true);


  const scrollToTop = () => {
    const header = document.querySelector('.Top-Page')
    header && header.scrollIntoView({ behavior: 'smooth' })
  }




  return (
    <div className="p-2 Top-Page">
      <div className=''>
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />



        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />



        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />


        v
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />


        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br /><h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br /><h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />




        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />


        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />

        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
        <h1>to make or get something or someone ready for something that will happen in the future:</h1>
        <br />
      </div>
      {scrollTop && <p onClick={() => scrollToTop()}><UpCircleOutlined className='text-white cursor-pointer fixed top-[92vh] right-[3vw]' style={{ scale: "2.5" }} /></p>}
      
    </div>

  )
}

export default HomePage