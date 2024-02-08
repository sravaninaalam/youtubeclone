import React from 'react'
import { User_Icon } from '../utils/icons'
import { timeDifference } from '../utils/helper'

const Realcomments = ({commentInfo}) => {
  const{snippet}= commentInfo
  const posted=new Date(snippet?.topLevelComment?.snippet?.publishedAt)
  return (
    <div>
      <div className='flex'>
           <img src={User_Icon} alt='usericon' className='w-8 h-8'/>
           <h1 className='font-medium mx-3 my-1'>{snippet?.topLevelComment?.snippet?.authorDisplayName}</h1>
           <span className=' text-sm font-semibold my-2 text-black'>{timeDifference(posted)}</span>
       </div>
       <p className='mx-12 p-1'>{snippet?.topLevelComment?.snippet?.textDisplay}</p>
    </div>
  )
}

export default Realcomments
