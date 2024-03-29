const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: ''
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        tagsFilter : (state, action)=>{
            const isTagSelected=  state.tags.includes(action.payload) ? true : false;
            if (!isTagSelected) {
                state.tags.push(action.payload);
            } else {
                const tagIndex = state.tags.indexOf(action.payload);
                state.tags.splice(tagIndex, 1);
            }
        },
        searchFilter : (state, action)=>{
            state.search = action.payload;
        }
    }
})

export const {tagsFilter, searchFilter} = filterSlice.actions;
export default filterSlice.reducer;