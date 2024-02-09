import {useEffect,useState} from 'react'
import { Youtube_Video_Api } from '../utils/constants'
import Shimmer from './Shimmer'

import Suggestedvideos from './Suggestedvideos'
import { Link } from 'react-router-dom'
import useRelatedVideos from '../customhooks/useRelatedVideos'

const Relatedsuggestions = () => {

  const relatedvideos=useRelatedVideos()

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
