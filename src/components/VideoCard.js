import React from 'react'

const VideoCard = ({info}) => {
    

    const {snippet,statistics} = info;
    const {thumbnails,channelTitle,title} = snippet;
    const view = (statistics.viewCount/1000000).toFixed(1);


  return (
    
    <div className='p-2 m-2 w-[260px] '>
        <img className='rounded-lg ' alt = "thumbnail" src={thumbnails?.medium?.url}/>
        <h3 className='font-bold'>{title}</h3>
        <ul>
            <li className='text-gray-600 text-sm pt-2'>{channelTitle}</li>
            <li className='text-gray-600 text-sm'>{view+"M views"}</li>
        </ul>
    </div>
  )
}

export default VideoCard