import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    signedIn: false,
    username: "",
}

export const fetchUser = createAsyncThunk('user/fetch', async () => {
    return axios.get(`${import.meta.env.VITE_URL}/user`, {
        headers: {
            'Authorization': `${localStorage.getItem('token')}`
        }
    })
        .then(res => res.data.user)
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.signedIn = true
            state.username = action.payload
        },
        signOut: (state) => {
            state.signedIn = false
            state.username = ""
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.signedIn = true
            state.username = action.payload.userName
        })
    }
})

export default userSlice.reducer
export const { signIn, signOut } = userSlice.actions