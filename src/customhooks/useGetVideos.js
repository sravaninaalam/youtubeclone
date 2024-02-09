import {useState,useEffect} from 'react'
import { Youtube_Video_Api } from '../utils/constants'

function useGetVideos() {
  const [videos,setVideos]=useState([])
    useEffect(()=>{
        getVideos()
    },[])
    
    async function getVideos(){
        const data=await fetch(Youtube_Video_Api)
        const json=await data.json()
    
        setVideos(json.items)
    }
  
  return videos
}

export default useGetVideos
