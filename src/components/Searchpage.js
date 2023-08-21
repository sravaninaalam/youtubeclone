import React, { useEffect,useState } from 'react'
import {useSearchParams,Link} from 'react-router-dom'
import { Search_By_Keyword } from '../utils/constants'
import Shimmer from './Shimmer'
import Searchcard from './Searchcard'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/redux/sidebarSlice'
const Searchpage = () => {
  const [params]=useSearchParams()
  const searchedtext =params.get("search_query")
  // console.log(searchedtext)
  const[videos,setVideos]=useState([])

  const dispatch=useDispatch()
  dispatch(toggleMenu())

  useEffect(()=>{
    getSearchResult()
  },[searchedtext])


  async function getSearchResult(){
    const data=await fetch(Search_By_Keyword+searchedtext)
    const json=await data.json()
    console.log(json.items[0],"searchin")
    setVideos(json.items)
  }
  return !videos?<Shimmer/>:(
    <div className='flex flex-wrap'>
        {/* {videos.map(video=> (<Link key={video.id?.videoId} to={'/watch?v='+video?.id?.videoId}><Video videos={video}/> </Link>))} */}
          {videos.map(video=> (<Link key={video.id?.videoId} to={'/watch?v='+video?.id?.videoId}><Searchcard videos={video}/> </Link>))}
     
    </div>
  )
}

export default Searchpage
