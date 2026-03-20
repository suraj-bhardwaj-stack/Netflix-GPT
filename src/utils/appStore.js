import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './userSlice'
import movieReducer from './MovieSlice'
import GptReducer from './GptSlice'
import languageReducer from './LangSlice'

const appStore = configureStore({
    reducer:{
        user : userReducer ,
        Movie : movieReducer,
        gpt : GptReducer,
        language : languageReducer

    }
});

export default appStore;