import {createSlice} from '@reduxjs/toolkit'
const sidebarSlice=createSlice({
    name:'sidebar',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})
export const {toggleMenu,closeMenu}=sidebarSlice.actions
export default sidebarSlice.reducer