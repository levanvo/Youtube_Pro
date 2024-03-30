import React from 'react'
import Menu_TiktokShorts from './Menu_TiktokShorts'

const TiktokShorts = () => {
  return (
    <div className="flex home-shell-outside">
      <Menu_TiktokShorts />
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_TiktokShorts p-2">
          TiktokShorts
        </div>
      </div>
    </div>
  )
}

export default TiktokShorts