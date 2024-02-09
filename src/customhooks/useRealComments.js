import {useEffect,useState} from 'react'
import { COMMENTS_API } from '../utils/constants'
import {useSearchParams} from 'react-router-dom'
function useRealComments(videoId) {
    const[comments,setComments]=useState([])
    useEffect(()=>{
     getCommentsData()
    },[])
    
    async function getCommentsData(){
        const data=await fetch(COMMENTS_API+videoId)
        const json=await data.json()
        setComments(json?.items)
    }
  return comments
}

export default useRealComments
