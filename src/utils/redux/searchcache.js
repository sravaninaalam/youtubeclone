import {createSlice} from '@reduxjs/toolkit'

const searchcache=createSlice({

    name:'searchcache',
    initialState:{},
    reducers:{
        cachedData:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
    
})

export const{cachedData}=searchcache.actions
export default searchcache.reducer