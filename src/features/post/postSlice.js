import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return data
})

const initialState = {
    postList: [],
    errorMessage: '',
    isFetching: false
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
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