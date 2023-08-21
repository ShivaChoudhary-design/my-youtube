import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOption:true
    },
    reducers:{
        toggleMenu : (state) =>{
            state.isMenuOption = !state.isMenuOption;
        },
        closeMenu :(state)=>{
            state.isMenuOption = false;
        }
    }
});

export const {toggleMenu,closeMenu} = appSlice.actions; 
export default appSlice.reducer;