import {useEffect,useState} from 'react'
import { SHORTS_API } from '../utils/constants'

function useShortsApi() {
    const[shorts,setShorts]=useState([])
    useEffect(()=>{
        fetchShorts()
    },[])
 async function fetchShorts(){
    const data=await fetch(SHORTS_API)
    const json=await data.json()
    setShorts(json?.items)
 }
  return shorts
}

export default useShortsApi
