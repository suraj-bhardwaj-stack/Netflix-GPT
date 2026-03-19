import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
    name : 'language',
    initialState :{
        lang : 'en'
    },
    reducers : {
        changeLanguage : (state , action)=>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage} = LangSlice.actions
export default LangSlice.reducer