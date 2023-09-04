import React from 'react'
import { timeDifference,countViews } from '../utils/helper'
const Suggestedvideos = ({videos}) => {
    const{snippet,statistics}=videos
    const{title,publishedAt,thumbnails,channelTitle}=snippet
    const{viewCount,likeCount}=statistics
    const publishedDate=new Date(publishedAt)
    
  return (
    <div className='shadow-lg mt-3 rounded-lg'>
    <img src={thumbnails?.medium?.url} alt='thumnail' className='w-96'/>
    <h2 className='font-semibold'>{title}</h2>
    <h2 className='text-gray-800'>{channelTitle}</h2>
    <h4 className=' text-gray-800 '>
        {countViews(viewCount)}-views <span className='ml-2'>{timeDifference(publishedDate)}</span><span className='ml-3'>{countViews(likeCount)}-likes</span>
    </h4>
    
 </div>
  )
}

export default Suggestedvideos
