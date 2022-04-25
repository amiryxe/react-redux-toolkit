import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return data
})

const initialState = {
    postList: [],
    likedPosts: [],
    errorMessage: '',
    isFetching: false
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        likePost: (state, action) => {
            state.likedPosts = [...state.likedPosts, action.payload]
        },
        unLikePost: (state, action) => {
            state.likedPosts = state.likedPosts.filter(item => item != action.payload)
        }
    },
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

export const { likePost, unLikePost } = postSlice.actions;
export default postSlice.reducer;