import { configureStore } from "@reduxjs/toolkit";
import videosReducer from '../app/redux/features/videos/videoSlice'


export const store = configureStore({
    reducer: {
        videos: videosReducer
    }
})