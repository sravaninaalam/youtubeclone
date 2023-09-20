import {useEffect,useState} from 'react'
import { Youtube_Video_Api } from '../utils/constants'
import Shimmer from './Shimmer'

import Suggestedvideos from './Suggestedvideos'
import { Link } from 'react-router-dom'

const Relatedsuggestions = () => {
  const[relatedvideos,setRelatedVideos]=useState([])
  useEffect(()=>{
      getRelatedVideos()
  },[])
  async function getRelatedVideos(){
    const data=await fetch(Youtube_Video_Api)
    const json=await data.json()
    setRelatedVideos(json?.items)
    // console.log("rltd",json?.items)
  }

  if(!relatedvideos)return  <Shimmer/>
  return (
    <>
      <div className='my-10 p-2 w-96'> 
       
           {relatedvideos.map(video=><Link  key={video.id}  to={'/watch?v='+video?.id}><Suggestedvideos videos={video}/></Link>)}
      </div>
    </>
  )
}

export default Relatedsuggestions
