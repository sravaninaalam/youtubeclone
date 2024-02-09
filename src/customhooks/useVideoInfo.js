import {useEffect,useState} from 'react'
import { Search_By_Id } from '../utils/constants'

function useVideoInfo(videoId) {
    const[videoInfo,setVideoInfo]=useState([])
    useEffect(()=>{
        getVideoDetails()
    },[])
    const getVideoDetails=async ()=>{
        const data=await fetch(Search_By_Id+videoId)
        const json=await data.json()
       setVideoInfo(json?.items[0])
    }


  return videoInfo
}

export default useVideoInfo
