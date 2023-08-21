import React from 'react'
import { User_Icon } from '../utils/icons'

const Chatmessage = ({messages}) => {
  return (
    <div className='flex my-2'>
        <img src={User_Icon} alt='usericon' className='w-8 h-8'/>
        
           <h1 className='mx-2 font-semibold'>{messages.name}</h1>
            <h2>{messages.text}</h2>
       
    </div>
  )
}

export default Chatmessage
