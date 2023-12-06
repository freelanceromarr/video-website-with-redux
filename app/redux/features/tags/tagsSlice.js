import { getTags } from "./tagsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchTags= createAsyncThunk('features/tags', async ()=>{
    const tags = await getTags();
    return tags;
})

const tagSlice= createSlice({
    name: "tags",
    initialState,
    extraReducers: (bluiders) => {
        bluiders.addCase(fetchTags.pending, (state, action)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchTags.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.tags = action.payload;
            state.isError= false
        })
        .addCase(fetchTags.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError= true;
            state.error = action.error.message;
        })
    }
})

export default tagSlice.reducer;