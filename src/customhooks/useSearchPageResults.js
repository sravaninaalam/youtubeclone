import {useEffect,useState} from 'react'
import { Search_By_Keyword } from '../utils/constants'

function useSearchPageResults(searchedtext) {
    const[videos,setVideos]=useState([])
  useEffect(()=>{
    getSearchResult()
  },[searchedtext])


  async function getSearchResult(){
    const data=await fetch(Search_By_Keyword+searchedtext)
    const json=await data.json()
    // console.log(json.items[0],"searchin")
    setVideos(json.items)
  }
  return videos
  
}

export default useSearchPageResults
