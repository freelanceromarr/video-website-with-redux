import { configureStore } from "@reduxjs/toolkit";
import videosReducer from '../app/redux/features/videos/videoSlice'
import tagReducer from '../app/redux/features/tags/tagsSlice'
import videoReducer from '@/app/redux/features/video/videoSlice'
import relatedVideosReducer from '@/app/redux/features/relatedVideo/relatedVideosSlice'
import filtersReducer from '../app/redux/features/filter/filterSlice'

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
        filters: filtersReducer
    }
})