import {useState,useEffect}from 'react'
import { Youtube_Video_Api } from '../utils/constants'

const useRelatedVideos = () => {
    const[relatedvideos,setRelatedVideos]=useState([])
    useEffect(()=>{
        getRelatedVideos()
    },[])
    async function getRelatedVideos(){
      const data=await fetch(Youtube_Video_Api)
      const json=await data.json()
      setRelatedVideos(json?.items)
    }
  return relatedvideos
}

export default useRelatedVideos
