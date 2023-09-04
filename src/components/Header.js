import {useDispatch,useSelector} from 'react-redux'
import { Hamburger_Icon, User_Icon, Youtube_Icon } from '../utils/icons'
import { toggleMenu } from '../utils/redux/sidebarSlice'
import { useEffect, useState } from 'react'
import { Youtube_Suggestions } from '../utils/constants'
import { Link } from 'react-router-dom'
import { cachedData } from '../utils/redux/searchcache'
import { Mic, Bell, Search,X } from 'lucide-react';
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
        <div className='grid grid-flow-col shadow-lg w-full p-5 m-2 sticky top-0 bg-white'>
            <img src={Hamburger_Icon} alt="hamburgericon" className='h-10 cursor-pointer my-2'
            onClick={()=>dispatch(toggleMenu())}/>
            <img src={Youtube_Icon} alt="logo" className='h-14 ml-1 mr-6'/>
           <div className='col-span-10 '>
            <form className='w-4/5 ml-6 flex'>
                  <input type='text' className='border border-gray-300 w-4/5  rounded-l-full px-1 focus:outline-none'
                  value={searchText} onChange={(e)=>{setSearchText(e.target.value)
                 }}
                  placeholder='Search' 
                    onFocus={()=>{setShowsuggestions(true)
                       }}/>
                  <button className='py-4 border border-gray-300'>{searchText.length>0 && <X onClick={()=>setSearchText('')} className=''/>}</button>
                  <Link to={'/search?search_query='+searchText}><button className='bg-gray-100 py-4 px-5  border border-gray-300 rounded-r-full'
                   onClick={()=>{setShowsuggestions(false)}}>🔍</button></Link>
                   <Mic className='ml-5 my-4'/>
              </form>
           
            {(showsuggestions && suggestedResult.length>1) &&  
              <div className='absolute w-2/5 ml-5 p-3 rounded-xl shadow-lg  bg-white'>
               {suggestedResult.map(res=>(
                     <Link to={'/search?search_query='+res}><h3 key={res} className='p-2 hover:bg-gray-50 flex'onClick={()=>{setSearchText(res)
                          setShowsuggestions(false) }}
                  ><Search className='px-1'/>{res}</h3></Link>))}
              </div>}
             
             </div>
            
               
                <Bell className='my-4'/>
       
          
            <img src={User_Icon} alt="usericon" className=' h-8 my-2'/>
        </div>
        
   </>
  )
}

export default Header
