import React, { useEffect, useState } from 'react'
import { SHORTS_API } from '../utils/constants'
import ShortsShimmer from './ShortsShimmer'

const Shortspage = () => {
    const[shorts,setShorts]=useState([])
    useEffect(()=>{
        fetchShorts()
    },[])
 async function fetchShorts(){
    const data=await fetch(SHORTS_API)
    const json=await data.json()
    // console.log(json)
    setShorts(json?.items)
 }
 if(shorts.length===0)return <ShortsShimmer/>
  return (
   <>
        <div className='w-2/12 mx-auto  my-5 '>
           {shorts.map(s=><div key={s?.id?.videoId} className='my-5'>
             <iframe 
              width="290" height="490" title='YouTube video player'
              src={"https://www.youtube.com/embed/"+s?.id?.videoId}></iframe> 
           </div>)}
            
        </div>
   </>
  )
}

export default Shortspage
