import {useEffect,useState} from 'react'
import { Search_By_Id } from '../utils/constants'
import { timeDifference,countViews } from '../utils/helper'
import { ThumbsUp,ThumbsDown, Forward } from 'lucide-react';
import useVideoInfo from '../customhooks/useVideoInfo';
const Videodetails = ({videoId}) => {
  
    const[showdescription,setShoeDescription]=useState(false)
    const videoInfo=useVideoInfo(videoId)
    const publishedDate=new Date(videoInfo?.snippet?.publishedAt)
  return !videoInfo?"": (
   <>
         <div className='w-[750px]'>
           
           <h2 className='font-bold p-2'>{videoInfo?.snippet?.title}</h2>
           <div className='flex m-2 p-2 justify-between bg-slate-50 shadow-md'>
             <h2 className='font-bold text-lg'>{videoInfo?.snippet?.channelTitle}</h2>
             <div className='flex'>
                <button className='bg-black p-2 m-1 mr-5 text-white rounded-lg'>Subscribe</button>
                <ThumbsUp className=' mx-3 m-1'/>{countViews(videoInfo?.statistics?.likeCount)}
                <ThumbsDown className=' mx-3 m-1'/>
                <Forward className=' mx-3 m-1'/>
             </div>
           </div>
           <div className='m-2 p-2 bg-gray-100 shadow-lg'>
            <h3 className='font-semibold  text-red-400'>{countViews(videoInfo?.statistics?.viewCount)} views <span className='ml-3'>
                {timeDifference(publishedDate)}</span></h3>
            <h3 className='font-semibold my-2'>Description:</h3>
                {showdescription && videoInfo?.snippet?.description}
                <button onClick={()=>setShoeDescription(!showdescription)} className='font-bold text-purple-500'>
                      {showdescription?"...Show less":"...Show more"}
                </button>
           </div>
        </div>
   </>
  )
}

export default Videodetails
