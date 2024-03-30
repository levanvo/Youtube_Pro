import React from 'react'
import MenuPage from '../../Web/MenuPage'
import MenuVideo from './MenuVideo'

const Video = () => {
  return (
    <div className="flex home-shell-outside">
      <MenuVideo/>
      <div className=" w-[100%] h-auto shell-2 p-2 rounded-md m-1">
        Video
      </div>
    </div>
  )
}

export default Video