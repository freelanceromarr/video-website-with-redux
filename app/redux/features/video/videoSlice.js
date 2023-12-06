import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideo }  from "./videoAPI";

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchVideo = createAsyncThunk('features/video', async (id)=>{
    const video = await getVideo(id);
    return video;
})
const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchVideo.pending, (state, action)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchVideo.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.video = action.payload;
            state.isError = false;
        })
        .addCase(fetchVideo.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message
        })
    }
})


export default videoSlice.reducer;