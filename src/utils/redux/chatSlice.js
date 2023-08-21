import {createSlice} from '@reduxjs/toolkit'
import { Live_Chat_Count } from '../constants'
const chatSlice=createSlice({
    name:"livechat",
    initialState:{
       messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(Live_Chat_Count,1)
            state.messages.unshift(action.payload)
        }
    }

})
export const {addMessage}=chatSlice.actions
export default chatSlice.reducer