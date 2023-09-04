import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import {useDispatch,useSelector} from 'react-redux'
import {addMessage} from '../utils/redux/chatSlice'
import { generateName, genereteRandomMessage, getConversation } from '../utils/helper'
const Livechat = () => {
    const dispatch=useDispatch()
    const [inputmsg,setInputmsg]=useState('')
    const livemessages=useSelector(store=>store.livechat.messages)
//   console.log(livemessages)
    useEffect(()=>{
        const i=setInterval(()=>{
           dispatch(addMessage({
            name:generateName(),
            text:genereteRandomMessage(20)  
             
          }
           ))
        },2000)
        return ()=>{
          clearInterval(i)
        }
    },[])
  return (
    <>
      <div className='p-2 h-[350px] w-96 overflow-y-scroll border border-black flex flex-col-reverse'>
         {livemessages.map((messages,index)=><Chatmessage messages={messages} key={index}/>)}
         
         </div>
    <form className='w-full' onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({name:'sravani',text:inputmsg}))
        setInputmsg('')
    }}>
            <input type='text' className='border border-black w-80 p-2 rounded-md' value={inputmsg} onChange={(e)=>setInputmsg(e.target.value)}/>
            <button className='p-2 m-2 bg-teal-200 rounded-lg'>Send</button>
         </form>
    </>
  )
}

export default Livechat
