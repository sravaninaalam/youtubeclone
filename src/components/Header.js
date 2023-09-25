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
        <div className='grid grid-flow-col grid-cols-12 shadow-lg p-5 m-2 sticky top-0 bg-white w-screen '>
            <div className='col-span-1 flex '>
            <img src={Hamburger_Icon} alt="hamburgericon" className=' h-6 md:h-10 cursor-pointer my-2'
            onClick={()=>dispatch(toggleMenu())}/>
            <img src={Youtube_Icon} alt="logo" className='h-8 md:h-14 md:ml-3 mr-6'/>
            </div>
           <div className='col-span-8 md:col-span-10  '>
            <form className='w-full md:w-4/5 ml-6 flex'>
                  <input type='text' className='border border-gray-300 md:w-4/5 md:ml-14  rounded-l-full px-1 focus:outline-none'
                  value={searchText} onChange={(e)=>{setSearchText(e.target.value)
                 }}
                  placeholder='Search' 
                    onFocus={()=>{setShowsuggestions(true)
                       }}/>
                  <button type='submit' className='py-4 border border-gray-300'>{searchText.length>0 && <X onClick={()=>setSearchText('')} />}</button>
                  <Link to={'/search?search_query='+searchText}><button className='bg-gray-100 py-4 px-5  border border-gray-300 rounded-r-full'
                   onClick={()=>{
setShowsuggestions(false)}}>🔍</button></Link>
                   <Mic className='ml-5 my-4'/>
              </form>
           
            {(showsuggestions && suggestedResult.length>1) &&  
              <div className='w-2/5 absolute  rounded-xl shadow-lg ml-24 bg-white'>
               {suggestedResult.map(res=>(
                     <Link to={'/search?search_query='+res}><h3 key={res} className='p-2 hover:bg-gray-50 flex'onClick={()=>{setSearchText(res)
                          setShowsuggestions(false) }}
                  ><Search className='px-1'/>{res}</h3></Link>))}
                 
              </div>}
             
             </div>
            
               <div className='col-span-2 flex'>
                     <Bell className=' md:m-5'/>
                     <img src={User_Icon} alt="usericon" className='h-3 md:h-8 my-3 mr-4'/>
            </div>
        </div>
        
   </>
  )
}

export default Header
