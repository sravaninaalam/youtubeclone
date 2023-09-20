import { useEffect, useState } from "react"
import { Youtube_Suggestions } from "../utils/constants"
import { useDispatch,useSelector } from "react-redux"
import { cachedData } from "../utils/redux/searchcache"


const useSearch = (searchText) => {
    // const[searchText,setSearchText]=useState('')
    const[suggestedResult,setSuggestedResult]=useState([])
    const dispatch=useDispatch
  const searchedcache=useSelector(store=>store.searchcache)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchedcache[searchText]){}
      else{getSearchSuggestions()}
    },200)
     return()=>{clearTimeout(timer)}
  },[searchText])

  const getSearchSuggestions=async()=>{
   
    const data=await fetch(Youtube_Suggestions+searchText)
    const json=await data.json()
    // console.log(json[1])
    setSuggestedResult(json[1])
    dispatch(cachedData({
      [searchText]:json[1]
     }))
  }

  return(
    suggestedResult
  )
}

export default useSearch
