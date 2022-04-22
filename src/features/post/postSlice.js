import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    postList: [],
    errorMessage: '',
    isFetching: false
}

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [fetchPosts.fulFilled]: (state, action) => {
            state.postList = action.payload
            state.isFetching = false
        },
        [fetchPosts.pending]: state => {
            state.isFetching = true
        },
        [fetchPosts.rejected]: state => {
            state.errorMessage = 'Fetching post error'
            state.isFetching = false
        }
    }
})

export default postSlice.reducer;