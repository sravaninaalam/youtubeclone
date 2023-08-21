import React from 'react'
import { User_Icon } from '../utils/icons'

function Comment({data,replies}) {
   
  return (
    <>
    <div className='flex bg-slate-100'>
        <img src={User_Icon} alt='usericon' className='w-8 h-8'/>
       <div className='px-2 m-2'>
            <h1>{data.name}</h1>
            <p>{data.text}</p>
            {replies && replies.map((data,index)=>
       <div className='border border-l-black rounded-lg'><Comment data={data} key={index} replies={data.replies}/></div>)}
       </div>
    </div>
  
    </>
  )
}

export default Comment