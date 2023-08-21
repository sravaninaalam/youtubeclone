import {configureStore} from '@reduxjs/toolkit'
import sidebarSlice from './sidebarSlice'
import chatSlice from './chatSlice'
import searchcache from './searchcache'
const store=configureStore({
    reducer:{   
        sidebar:sidebarSlice,
        livechat:chatSlice,
        searchcache:searchcache
    }
})
export default store