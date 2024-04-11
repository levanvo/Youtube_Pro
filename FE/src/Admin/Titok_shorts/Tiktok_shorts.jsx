import React, { useEffect, useState } from 'react'
import Menu_TiktokShorts from './Menu_TiktokShorts'

const TiktokShorts = () => {

  useEffect(() => {

  }, []);

  return (
    <div className="flex home-shell-outside">
      <Menu_TiktokShorts />
      <div className=" w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
        <div className="conten_TiktokShorts p-2">
          TiktokShorts
          <div className="tiktok-embed">
            {/* <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@thapcamtivisports/video/7355394909207104800" data-video-id="7355394909207104800" style={{maxWidth: 333, maxHeight:577}} >
              <section>
                <a target="_blank" title="@thapcamtivisports" href="https://www.tiktok.com/@thapcamtivisports?refer=embed">@thapcamtivisports</a> Xem trực tiếp tất cả các môn thể thao tại ThapcamTV<a title="xuhuong" target="_blank" href="https://www.tiktok.com/tag/xuhuong?refer=embed">#xuhuong</a>
                <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a>
                <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
                <a title="trending" target="_blank" href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
                <a title="billiards" target="_blank" href="https://www.tiktok.com/tag/billiards?refer=embed">#billiards</a>
                <a target="_blank" title="♬ nhạc nền  - Kim Khánh" href="https://www.tiktok.com/music/nhạc-nền-Kim-Khánh-7310771201633192706?refer=embed">♬ nhạc nền  - Kim Khánh</a>
              </section>
            </blockquote> */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiktokShorts