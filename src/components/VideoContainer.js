import React, { useEffect, useState } from 'react'
import { Youtube_Video_Api } from '../utils/constants'
import Shimmer from './Shimmer'
import Video from './Video'
import {Link} from 'react-router-dom'
import useGetVideos from '../customhooks/useGetVideos'

const VideoContainer = () => {

    const videos=useGetVideos()
    if(!videos)return <Shimmer/>
  return (
   <>
        <div className='flex flex-wrap p-2'>
         {videos.map(video=> (<Link key={video.id} to={'/watch?v='+video?.id}><Video videos={video}/> </Link>))}
        </div>
   </>
  )
}

export default VideoContainer
