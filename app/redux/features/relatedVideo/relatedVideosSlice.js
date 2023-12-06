import { getRelatedVideos } from "./relatedVideosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideos = createAsyncThunk('features/relatedVideos', async ({tags, id})=>{
   const relatedVideos= await getRelatedVideos({tags, id})
   return relatedVideos;
})
const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchRelatedVideos.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error= ''
        })
        .addCase(fetchRelatedVideos.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.relatedVideos = action.payload;
            state.isError = false;
            state.error= ''
        })
        .addCase(fetchRelatedVideos.rejected, (state, action)=>{
            state.isLoading = false;
            state.relatedVideos = [],
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export default relatedVideosSlice.reducer;