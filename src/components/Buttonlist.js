import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Search_By_Keyword } from '../utils/constants'
import Searchcard from './Searchcard'
function Buttonslist(){
    const btn_list=["All","Gaming","Live","React Js","Akshay Saini","Music","Cricket","Mix","Songs","Cooking","Mahishivan"]
    const[videos,setVideos]=useState([])
    // useEffect(()=>{
    //     getResults()
    // },[])

    async function getResults(keyword){
        const data=await fetch(Search_By_Keyword+keyword)
        const json=await data.json()
        setVideos(json.items)
        // console.log(keyword,"clicked")
    }
    return(
        <>
        <div className="flex">
            {btn_list.map((btn,index)=><Link to={'/search?search_query='+btn} key={index}>
            <button  onClick={()=>getResults(btn)}
             className="py-2 px-5 hover:bg-black hover:text-white  bg-slate-300 m-2 rounded-lg">
             {btn}</button></Link>)}
             
        </div>
        {videos.map(video=> (<Link key={video.id?.videoId} to={'/watch?v='+video?.id?.videoId}><Searchcard videos={video}/> </Link>))}
        </>
    )
}

export default Buttonslist