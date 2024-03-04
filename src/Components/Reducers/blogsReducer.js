import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    loading: false,
    blogs: [],
    error: null
}

export const fetchBlogs = createAsyncThunk('blogs/fetch' ,() => {
    return axios
            .get(`${import.meta.env.VITE_URL}/blogs`)
            .then(res => res.data)
})

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.loading = false
            state.blogs = [...action.payload]
            state.error = null
        })
        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.loading = false
            state.blogs = []
            state.error = action.error.message
        })
    
    }
})

export default blogSlice.reducer