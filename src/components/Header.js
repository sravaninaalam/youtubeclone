import {useDispatch,useSelector} from 'react-redux'
import { Hamburger_Icon, User_Icon, Youtube_Icon } from '../utils/icons'
import { toggleMenu } from '../utils/redux/sidebarSlice'
import { useEffect, useState } from 'react'
import { Youtube_Suggestions } from '../utils/constants'
import { Link } from 'react-router-dom'
import { cachedData } from '../utils/redux/searchcache'
import { Mic, Bell } from 'lucide-react';
const Header = () => {
  const[searchText,setSearchText]=useState('')
  const[showsuggestions,setShowsuggestions]=useState(false)
  const[suggestedResult,setSuggestedResult]=useState([])
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
   
    const data=await fetch(Youtube_Suggestions+searchText)
    const json=await data.json()
    // console.log(json[1])
    setSuggestedResult(json[1])
    dispatch(cachedData({
      [searchText]:json[1]
     }))
  }
  return (
   <>
        <div className='grid grid-flow-col shadow-lg w-full p-5 m-2'>
            <img src={Hamburger_Icon} alt="hamburgericon" className='h-10 cursor-pointer'
            onClick={()=>dispatch(toggleMenu())}/>
            <img src={Youtube_Icon} alt="logo" className='h-8 mx-3'/>
           <div className='col-span-10'>
            <form>
                  <input type='text' className='border border-black w-1/2 rounded-l-full p-1'
                  value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
                    onFocus={()=>setShowsuggestions(true)}/>     
                  <Link to={'/search?search_query='+searchText}><button className='bg-gray-100 py-1 px-5 border border-black rounded-r-full'
                   onClick={()=>{setShowsuggestions(false)}}>🔍</button></Link>
              </form>
            
            {(showsuggestions && suggestedResult.length>1) &&  
              <div className='absolute w-2/6 p-2 rounded-xl shadow-lg  bg-white'>
               {suggestedResult.map(res=>(
                     <Link to={'/search?search_query='+res}><h3 key={res} className='p-2 hover:bg-gray-50'onClick={()=>{setSearchText(res)
                          setShowsuggestions(false) }}
                  >{res}</h3></Link>))}
             </div>}
             </div>
            
                <Mic/>
                <Bell/>
       
          
            <img src={User_Icon} alt="usericon" className=' h-8 '/>
        </div>
        
   </>
  )
}

export default Header
