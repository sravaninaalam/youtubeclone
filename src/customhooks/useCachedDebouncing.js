import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { Youtube_Suggestions_CORS } from '../utils/constants'
import { cachedData } from '../utils/redux/searchcache'
function useCachedDebouncing() {
    const[suggestedResult,setSuggestedResult]=useState([])
    const[searchText,setSearchText]=useState('Lasya Talks')
    const dispatch=useDispatch()
  
    const searchedcache=useSelector(store=>store.searchcache)
    useEffect(()=>{
      const timer=setTimeout(()=>{
        if(searchedcache[searchText]){}
        else{getSearchSuggestions()}
      },200)
       return()=>{clearTimeout(timer)}
    },[searchText])
  
    const getSearchSuggestions=async()=>{
     
      const data=await fetch(Youtube_Suggestions_CORS+searchText)
      const json=await data.json()

      setSuggestedResult(json[1])
      dispatch(cachedData({
        [searchText]:json[1]
       }))
    }
    console.log(suggestedResult)
  return suggestedResult
}

export default useCachedDebouncing
