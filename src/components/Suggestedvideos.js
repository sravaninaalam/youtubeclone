import React from 'react'
import { timeDifference,countViews } from '../utils/helper'
const Suggestedvideos = ({videos}) => {
    const{snippet,statistics}=videos
    const{title,publishedAt,thumbnails}=snippet
    const{viewCount,likeCount}=statistics
    const publishedDate=new Date(publishedAt)
    
  return (
    <div className='shadow-lg mt-3 rounded-lg'>
    <img src={thumbnails?.medium?.url} alt='thumnail' className='w-96'/>
    <h2 className='font-bold'>{title}</h2>
    <h4 className='font-medium text-slate-600 '>
        {countViews(viewCount)}-views {timeDifference(publishedDate)}<span className='ml-2'>{countViews(likeCount)}-likes</span>
    </h4>
    
 </div>
  )
}

export default Suggestedvideos
